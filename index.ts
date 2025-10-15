import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import about from "./routes/about"

dotenv.config()

const app = express()

const PORT = process.env.PORT 

// middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors());
app.use("/me",about)

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to My Dynamic Profile API. Visit /me to view the profile data.",
  });
});



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
