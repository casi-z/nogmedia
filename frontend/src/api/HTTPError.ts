import {IHTTPError} from "@/types/types";

class HttpError extends Error{

    public status: number;
    public error: boolean = true;
    public errors: any[]
    constructor(error: IHTTPError | unknown){

        // @ts-ignore
        super(error.message)
        this.error = true
        // @ts-ignore
        this.status = error.status
        // @ts-ignore
        this.errors = error.errors
        // @ts-ignore
        console.log(`Ошибка на сервере (${this.status}): ${error.message}, ${this.errors}`)
    }

    

}
export default HttpError