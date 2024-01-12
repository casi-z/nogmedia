import bot from "../utils/vk.js";
import {randomCodeGenerator} from "../utils/other.js";
import {database} from "../app.js";
import tokenService from "../service/token-service.js";
import UserDto from "../dto/UserDto.js";
import {request, response} from "express";
import ApiError from "../exceptions/api-error.js";

let code = ''

class User {

    async sendCode(request, response, next) {

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
            if (!userData) {
                throw ApiError.badRequest('Неверный юзернэйм')
            }

            bot.sendCode(Number(userData.vkId), code)
            response.status(200).send({result: `Код отправлен пользователю ${request.body.username}`})

        } catch (error) {
            next(error)
        }

    }

    async login(request, response, next) {

        try {

            //Проверяем правильный ли код
            if (request.body.code !== code) {
                throw ApiError.badRequest('Неверный код')
            }

            const user = await database.promise().query(
                `SELECT *
                 FROM user
                 WHERE name = ?`,
                [request.body.username]
            )

            //Проверяем есть ли юзер с таким юзернэймом в БД
            if (!user[0][0]) {
                throw ApiError.badRequest('Неверный юзернэйм')
            }

            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(user[0][0].name, tokens.refreshToken)

            //Добавляем refreshToken в куки. Недоступен из браузера (httpOnly), живёт 30 дней
            response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            response.status(200).json({...tokens, user: userDto})

        } catch (error) {
            next(error)
        }


    }

    async logout(request, response, next) {

        try {
            const {refreshToken} = request.cookies
            await tokenService.removeToken(refreshToken)
            response.clearCookie('refreshToken')

            return response.status(200).send('Success')
        } catch (error) {
            next(error)
        }
    }

    async refresh(request, response, next) {

        try {

            const {refreshToken} = request.cookies

            if(!refreshToken){
                throw ApiError.unauthorizedError()
            }

            //Получаем зашифрованный в токен данные юзера
            const userData = tokenService.validateRefreshToken(refreshToken)

            //Проверяем есть ли refreshToken в БД
            const tokenFromDB = await tokenService.findToken(refreshToken)

            if (!userData || !tokenFromDB){
                throw ApiError.unauthorizedError()
            }

            //Получаем юзера из БД по id из токена
            const user = await database.promise().query(
                `SELECT *
                 FROM user
                 WHERE id = ?`,
                [userData.id]
            )


            const userDto = new UserDto(user)

            //Создаём новые токены
            const tokens = tokenService.generateTokens({...userDto})

            //Сохраняем refreshToken в БД
            await tokenService.saveToken(user[0][0].name, tokens.refreshToken)

            //Добавляем refreshToken в куки. Недоступен из браузера (httpOnly), живёт 30 дней
            response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            response.status(200).json({...tokens, user: userDto})

        } catch (error) {
            next(error)
        }
    }
}

export default new User()