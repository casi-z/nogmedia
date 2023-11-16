import {database} from '../app.js'
export async function getCategories(request, response) {
    database.query(`SELECT name FROM category`,

        (error, result) => {

            if (error) {
                response.status(404)
            } else {
                response.send(result)
            }
            

        }
    )
}