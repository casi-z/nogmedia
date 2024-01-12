import express from "express";

import NewsController from "../controllers/news.js";
import AuthMiddleware from "../middlewares/auth.js";

export const newsRoutes = express.Router()

newsRoutes.post('/get-news-by-number', NewsController.getByNumber)
newsRoutes.post('/get-news-by-id', NewsController.getByID)
newsRoutes.post('/get-news-image-by-id', NewsController.getNewsImageByID)
newsRoutes.post('/add-view', NewsController.addView)
newsRoutes.post('/news-edit', AuthMiddleware, NewsController.newsEdit)
newsRoutes.get('/get-all-popular', NewsController.getAllPopular)
newsRoutes.post('/get-by-category', NewsController.getByCategory)

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidmtJZCI6IjMxODA1OTI2NiIsImlhdCI6MTcwNTA1NTYzMCwiZXhwIjoxNzA1MDU3NDMwfQ.5OASjIXwuZ4r8-USq98KPhJhSKHStvsQuCKKdlS30YU