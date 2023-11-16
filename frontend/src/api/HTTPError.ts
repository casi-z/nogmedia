class HttpError {
    constructor(message: any){
        this.error = message
    }
    public type = 'error'
    public error;

}
export default HttpError