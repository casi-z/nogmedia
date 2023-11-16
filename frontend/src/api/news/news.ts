import Request from "@/api/request";
import HttpError from "../HTTPError";

export default class NewsAPI extends Request {

    constructor() {
        super('get-news-by-id');
    }

    public async getNewsByID(id: number) {

        try {

            const response: any = await super.post({ id: id })

            const loadImage = new GetNewsImageByID()

            const image: any = await loadImage.load(id)

            const result = response.data

            result.image = image

            return result

        } catch (error) {
            return new HttpError(error)
            
        }

    }
}

class GetNewsImageByID extends Request {

    constructor() {
        super('get-news-by-id/image');
    }

    public async load(id: number) {

        const image: any = await super.post({ id: id }, '', {responseType: 'blob'})


        return URL.createObjectURL(image.data)

    }
}