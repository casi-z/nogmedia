import Request from "@/api/request";

export default class Login extends Request {

    constructor() {
        super('login');
    }

    public async sendCode(username: string) {

        try {

            const response: any = await super.post(username, 'send-code')
            return response.data

        } catch (error) {
            console.log(error)
        }

    }

}