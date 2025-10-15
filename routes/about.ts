import express from "express"
import { AboutMe } from "../controllers/about.controller"
import { apiLimiter } from "../middlewares/rateLimiter"

const router =  express.Router()

router.route("/").get(apiLimiter,AboutMe)

export default router