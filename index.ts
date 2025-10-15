import express from "express"
import dotenv from "dotenv"
import about from "./routes/about"

dotenv.config()

const app = express()

const PORT = process.env.PORT 

app.use(express.json())
app.use("/me",about)


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
