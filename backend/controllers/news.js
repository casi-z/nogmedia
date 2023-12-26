import { database } from "../app.js";
import fs from "fs";

class NewsController {

    async getByNumber(request, response) {

        database.query(`SELECT * FROM news LIMIT 1 OFFSET ?`,

            [request.body.newsNumber - 1],

            (error, result) => {

                if (error) {
                    response.status(404).send({ 'result': `News #${request.body.id - 1} is not exist` })

                } else {
                    response.send(result[0])

                }
            }
        )
    }

    async getByID(request, response) {


        database.query(`SELECT * FROM news WHERE id = ?`,
            [request.body.id],
            (error, result) => {

                if (error) {
                    response.status(404).send({ 'result': `News with id "${request.body.id} is not exist` })

                } else {
                    response.send(result[0])

                }
            }
        )
    }

    async getByCategory(request, response) {

        database.query(`SELECT * FROM news WHERE category = ? LIMIT 1 OFFSET ?`,

            [request.body.categoryID, request.body.newsNumber - 1],

            (error, result) => {

                if (error) {
                    response.status(404).send({ 'result': `News #${request.body.id - 1} is not exist` })

                } else {
                    response.send(result[0])

                }
            }
        )
    }

    async addView(request, response) {


        database.query(`UPDATE news SET views = views + 1 WHERE id = ?`,
            [request.body.id],
            (error, result) => {

                if (error) {
                    console.log(error)

                } else {
                    response.status(200).send(true)
                }

            }
        )
    }

    async getNewsImageByID(request, response) {

        const imageURL = `./media/news/${request.body.id}.jpg`

        fs.readFile(imageURL, (error, data) => {
            if (error) {
                response.statusCode = 404;
                console.error(`Resource "${imageURL}" not found!`);
            } else {
                response.send(data)
            }
        })

    }

    async newsEdit(request, response) {
        const newData = request.body
        console.log(newData)
        database.query(`UPDATE news SET title = ?, text = ? WHERE id = ?`,
            [newData.title, newData.text, newData.id],
            (error, result) => {

                if (error) {
                    console.log(error)
                    response.status(404).send({ 'result': `News with id "${request.body.id} is not exist` })

                } else {
                    response
                        .status(200)
                        .send({ 'result': `News edit successful` })

                }
            }
        )
    }
    async getAllPopular(request, response) {

        database.query(`SELECT * FROM news WHERE popular = 1`,

            (error, result) => {

                if (error) {
                    response.status(404).send({ 'result': `Popular news is not exist` })

                } else {
                    response.send(result)
                    //console.log(result);

                }
            }
        )
    }
}
export default new NewsController()