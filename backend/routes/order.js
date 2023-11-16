import express from "express";
import controller from "../controllers/order";

const router = express.Router()
router.post('/send-code', controller.sendCode)
//router.post('/post-code', controller.login)

export default router;