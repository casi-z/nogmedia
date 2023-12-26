import fs from "fs";
import mysql from "mysql2";
import {database} from '../app.js'

const obj = (fs.readFileSync('./watchers.json', 'utf8'));



export async function posts(req, res) {
    database.query(`SELECT *
                    FROM projects
                    WHERE id = ${req.body.id + 1}`, (error, result) => {
        if (error) throw error
        res.send(result[0])
    })
}

export async function postsLength(req, res) {
    database.query('SELECT * FROM projects', (error, result) => {
        if (error) throw error
        res.send([result.length])
    })


}

export async function getWatchers(req, res) {
    // database.query(`SELECT * FROM watchers`, (error, result) => {
    // 	if (error) throw error
    // 	console.log(result);
    // 	// res.send(result[0])
    // })

    res.send(obj);

}

export async function addWatcher(req, res) {
    //res.status(400)
    fs.writeFileSync('./watchers.json', `{"watchers":${(JSON.parse(fs.readFileSync('./watchers.json', 'utf8'))).watchers + 1}}`)
}

export function addPost(req, res) {
    //console.log(req.body);
    res.status(400)
    database.query(
        `UPDATE projects
         SET description = '${req.body.newPost.description}'
         WHERE id = '${req.body.newPost.id}';`,
        function (error) {
            if (error) throw error

        }
    )
    database.query(
        `UPDATE projects
         SET fullName = '${req.body.newPost.fullName}'
         WHERE id = '${req.body.newPost.id}';`,
        function (error) {
            if (error) throw error

        }
    )
}