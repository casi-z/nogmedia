import express, { request } from 'express'
import bodyParser from 'body-parser'
import mysql from "mysql2";
import { apiRoutes } from "./routes/main.js";
import path from 'path'
import { loginRoutes } from "./routes/login.js";
import { categoriesRoutes } from './routes/categories.js';

export const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, access-control-allow-origin')
    next()
})

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
app.use('/api/login', loginRoutes)
app.use('/api/categories', categoriesRoutes)

//Отвечаем на все запросы одним файлом index.html, роутинг происходит на клиенте

app.get("*", (request, response) => 

    response.sendFile("index.html", { 
        root: path.join('public') 
    })

);

// app.use('/api/admin', adminRoutes)


