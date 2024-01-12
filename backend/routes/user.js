import express from "express";

import user from "../controllers/user.js";

export const userRoutes = express.Router()



userRoutes.post('/send-code', user.sendCode)
userRoutes.post('/login', user.login)
userRoutes.post('/logout', user.logout)
userRoutes.get('/refresh', user.refresh)
