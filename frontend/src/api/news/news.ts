import Api from "@/api/api";
import HttpError from "../HTTPError";
import viewsHistory from "@/utils/ViewsHistory";
import {IHTTPError, INews} from "@/types/types";
import { log } from "console";

export default class NewsAPI extends Api {

    constructor() {
        super('news');
    }

    public async getByNumber(newsNumber: number) {

        try {

            const response: any = await super.post({ newsNumber: newsNumber }, 'get-news-by-number')

            const result = response.data


            const image: string = await this.getImageByID(result.id)


            result.image = image

            return result


        } catch (error) {

            return new HttpError(error)

        }

    }

    public async getByCategory(categoryID: number, newsNumber: number) {

        try {

            const response: any = await super.post({ newsNumber: newsNumber, categoryID: categoryID}, 'get-by-category')

            const result = response.data

            const image: string = await this.getImageByID(result.id)


            result.image = image
            console.log(result)

            return result


        } catch (error) {

            return new HttpError(error)

        }

    }

    public async getByID(id: number) {

        try {

            const response: any = await super.post({ id: id }, 'get-news-by-id')

            const result = response.data

            const image: string = await this.getImageByID(id)


            result.image = image

            return result


        } catch (error) {

            return new HttpError(error)

        }

    }

    public async getImageByID(id: number) {

        const image: any = await super.post({ id: id }, 'get-news-image-by-id', { responseType: 'blob' })


        return URL.createObjectURL(image.data)

    }

    public async addView(id: number) {
        if (!viewsHistory.exist(id)) {

            await super.post({ id: id }, 'add-view')
            viewsHistory.add(id)


        }

    }

    public async edit(data: any) {

        await super.post(data, 'news-edit', { 'Content-Type': 'multipart/form-data' })

    }

    private async changeImage() {
        const newImage = new FormData()

    }

    public async getAllPopular() {
        try {

            const response: any = await super.get('get-all-popular')
            
            
            const result = response.data

            const mapped = await result?.map(async (news: INews) => {
                //const image = await this.getImageByID(response.data.id)
                return { ...news}


            })

            return result


        } catch (error) {

            return new HttpError(error)

        }
    }


}

