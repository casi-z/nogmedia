import express from "express";

import * as controller from "../controllers/categories.js";

export const categoriesRoutes = express.Router()

categoriesRoutes.get('/get-categories', controller.getCategories)
