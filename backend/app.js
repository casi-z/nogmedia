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
import errorMiddleware from "./middlewares/error.js";

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


app.use(express.static('public'))
app.set('view engine')


export const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nogmedia',
})


export let doVKBotEnabled = true
export let code = undefined

app.use('/api', apiRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/user', userRoutes)
app.use('/api/categories', categoriesRoutes)
app.use(errorMiddleware)

//Отвечаем на все запросы одним файлом index.html, роутинг происходит на клиенте

app.get("*", (request, response) =>

    response.sendFile("index.html", {
        root: path.join('public')
    })

);
export default app
// app.use('/api/admin', adminRoutes)


