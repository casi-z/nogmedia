import express from "express";

import * as controller from "../controllers/main.js";

export const apiRoutes = express.Router()



apiRoutes.post('/get-news-by-id', controller.getNewsByID)
apiRoutes.post('/get-news-by-id/image', controller.getNewsImageByID)
apiRoutes.post('/add-watcher', controller.addWatcher)
apiRoutes.get('/posts-length', controller.postsLength)
apiRoutes.get('/watchers', controller.getWatchers)
apiRoutes.post('/add-post', controller.addPost)
apiRoutes.post('/add-post', controller.addPost)
