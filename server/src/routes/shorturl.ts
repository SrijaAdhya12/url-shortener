import express from "express"
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shorturl"
const router = express.Router()


router.route("/shorturl").post(createUrl).get(getAllUrl)
router.route("/shorturl/:id").get(getUrl).delete(deleteUrl)


export default router