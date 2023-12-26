import express from "express";

import NewsController from "../controllers/news.js";

export const newsRoutes = express.Router()



newsRoutes.post('/get-news-by-number', NewsController.getByNumber)
newsRoutes.post('/get-news-by-id', NewsController.getByID)
newsRoutes.post('/get-news-image-by-id', NewsController.getNewsImageByID)
newsRoutes.post('/add-view', NewsController.addView)
newsRoutes.post('/news-edit', NewsController.newsEdit)
newsRoutes.get('/get-all-popular', NewsController.getAllPopular)
newsRoutes.post('/get-by-category', NewsController.getByCategory)