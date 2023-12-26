import Request from "@/api/request";
import HttpError from "@/api/HTTPError";

export default class User extends Request {

    constructor() {
        super('user');
    }

    //Отправляет код в контакте
    public async sendCode(username: string) {

        try {

            const response: any = await super.post({'username': username}, 'send-code')
            return response.data

        } catch (error) {
            return new HttpError(error)
        }

    }

    public async login(username: string, code: number){

        try {

            const response: any = await super.post({'username': username, 'code': code}, 'login')
            return response.data

        } catch (error) {
            console.log(error)
        }

    }

}