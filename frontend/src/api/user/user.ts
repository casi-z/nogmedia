import Api from "@/api/api";
import HttpError from "@/api/HTTPError";
import {$api} from "@/api/constants";

export default class User extends Api {

    constructor() {
        super('user', $api);
    }

    //Отправляет код в контакте
    public async sendCode(username: string) {

        try {

            const response: any = await super.post({'username': username}, 'send-code')
            return response.data

        } catch (error) {
            return error
        }

    }

    public async login(username: string, code: string | undefined){

        try {

            const response: any = await super.post({'username': username, 'code': code}, 'login')
            localStorage.setItem('token', response.data.accessToken)
            return response.data

        } catch (error) {

            return error
        }

    }

    public async logout(){
        await super.post({}, 'logout')
    }

}