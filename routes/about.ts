import express from "express"
import { AboutMe } from "../controllers/about.controller"

const router =  express.Router()

router.route("/").get(AboutMe)

export default router