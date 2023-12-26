import HttpError from "./HTTPError"
import { API_BASE_URL } from "./constants"
import axios from 'axios'

export default class Request {

    public url

    constructor(
        url: string
    ){
        this.url = `${API_BASE_URL}/${url}`

    }

    public async get(additionalURL?: string, headers?: {},) {

        const URL = additionalURL ? `${this.url}/${additionalURL}` : this.url

        try {
            const response = await axios.get(URL, headers)

            return response
        } catch (error) {
            return new HttpError(error)
        }

    }

    public async post(body: any, additionalURL?: string, headers?: {}, ){


        const URL = additionalURL ? `${this.url}/${additionalURL}` : this.url

        try {
            const response = await axios.post(URL, body, headers)
            return response
        } catch (error) {
            return new HttpError(error)
        }

            
    }


}

export class GetRequest extends Request {

    constructor(url: string) {
        super(url)
    }

    public async get(headers?: {}) {

        return await axios.get(this.url, headers)

    }
}

export class PostRequest extends Request {

    constructor(url: string){
        super(url)
    }

    public async post(body: any, headers?: {}){

        let result

        await axios.post(this.url, body, headers)
            .then((response: any) => {
                result = response
            })

        return result


    }
}