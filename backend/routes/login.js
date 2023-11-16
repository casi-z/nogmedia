import express from "express";

import * as controller from "../controllers/login.js";

export const loginRoutes = express.Router()



loginRoutes.post('/send-code', controller.sendCode)
