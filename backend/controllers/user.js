import bot from "../utils/vk.js";
import {randomCodeGenerator} from "../utils/other.js";
import {database} from "../app.js";
import tokenService from "../service/token-service.js";
import UserDto from "../dto/UserDto.js";
import {request, response} from "express";

let code = ''

class User {

    async sendCode(request, response) {

        code = randomCodeGenerator()

        try {
            async function getUserVkId(name) {

                const data = await database.promise().query(`SELECT *
                                                             FROM user
                                                             WHERE name = ?`,

                    [name])

                return data[0][0]
            }

            const userData = await getUserVkId(request.body.username)

            bot.sendCode(Number(userData.vkId), code)
            response.status(200).send({result: `Код отправлен пользователю ${request.body.username}`})

        } catch (error) {

            response.status(500).send({'result': 'Ошибка в VK API. Попробуйте позже'})
        }

    }

    async login(request, response) {


        const user = await database.promise().query(
            `SELECT *
             FROM user
             WHERE name = ?`,
            [request.body.username]
        )

        //Проверяем есть ли юзер с таким юзернэймом в БД
        if (!user[0][0]) {
            return response.status(500).send('Неверный юзернейм')
        }

        //Проверяем правильный ли код
        if (request.body.code !== code) {
            return response.status(500).send('Неправильный код')
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(user[0][0].name, tokens.refreshToken)

        //Добавляем refreshToken в куки. Недоступен из браузера (httpOnly), живёт 30 дней
        response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        response.status(200).json({...tokens, user: userDto})


    }

    async logout(request, response) {

        try {
            const {refreshToken} = request.cookies
            await tokenService.removeToken(refreshToken)
            response.clearCookie('refreshToken')
            response.status(200).send('Success')
        } catch (error) {
            response.status(500).send('Ты не залогинился!!')
        }
    }

    async refresh(request, response) {
        const user = await database.promise().query(
            `SELECT *
             FROM user
             WHERE name = ?`,
            [request.body.username]
        )
        const {refreshToken} = request.cookies
        //Проверяем есть ли юзер с таким юзернэймом в БД
        if (!user[0][0]) {
            return response.status(500).send('Неверный юзернейм')
        }
    }
}

export default new User()