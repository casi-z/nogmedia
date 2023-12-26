import express, { request } from 'express'
import bodyParser from 'body-parser'
import mysql from "mysql2";
import { apiRoutes } from "./routes/main.js";
import path from 'path'
import { userRoutes } from "./routes/user.js";
import { categoriesRoutes } from './routes/categories.js';
import { newsRoutes } from "./routes/news.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, access-control-allow-origin')
//     next()
// })

app.use(express.static('public'))
app.set('view engine')


export const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nogmedia',
})

// database.query(`SELECT *
//                         FROM news
//                         WHERE category = ${2}
//                         LIMIT 1 OFFSET ${1}`,

//     (error, result) => {

//         if (error) {
            

//         } else {
//             console.log(result[0]);

//         }
//     }
// )

// database.query(`
//             UPDATE news
//             SET category = 1
//         `,

//     (error, result) => {

//         if (error) {
//             console.log(error)

//         }
//     }
// )

export let doVKBotEnabled = true
export let code = undefined

app.use('/api', apiRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/user', userRoutes)
app.use('/api/categories', categoriesRoutes)

//Отвечаем на все запросы одним файлом index.html, роутинг происходит на клиенте

app.get("*", (request, response) =>

    response.sendFile("index.html", {
        root: path.join('public')
    })

);
export default app
// app.use('/api/admin', adminRoutes)


