import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/dbConfig"
import shortUrl from "./routes/shorturl"
dotenv.config()
connectDb()

const port = process.env.PORT || 5001

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))


app.get("/api/", shortUrl);


app.get('/api', (_, res) => res.send('Welcome to URL_SHORTENER'))

app.listen(port, () => {
    console.log(`Server started succesfully on port: ${port}`)
})