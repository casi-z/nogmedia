import express from "express";
import {setPost} from "../controllers/admin";

const router = express.Router()
router.post('/add--post', setPost)

export default router;