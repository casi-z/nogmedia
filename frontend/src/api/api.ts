import HttpError from "./HTTPError"
import {$api, API_BASE_URL} from "./constants"
import axios from 'axios'

export default class Api {

    public url
    public interceptor: any

    constructor(
        url: string,
        interceptor?: any
    ) {
        this.url = `${API_BASE_URL}/${url}`
        this.interceptor = interceptor

    }

    public async get(additionalURL?: string, headers?: {},) {

        const URL = additionalURL ? `${this.url}/${additionalURL}` : this.url
        const interceptor = this.interceptor || axios


        const response = await interceptor.get(URL, headers)

        if (response.status !== 200) {
            throw new HttpError(response.data)
        }

        return response


    }

    public async post(body: any, additionalURL?: string, headers?: {},) {


        const URL = additionalURL ? `${this.url}/${additionalURL}` : this.url
        const interceptor = this.interceptor || axios


        const response = await interceptor.post(URL, body, headers)

        if (response.status !== 200) {
            throw new HttpError(response.data)
        }

        return response


    }


}

