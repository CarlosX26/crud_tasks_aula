import express from "express"
import userRouter from "./routes/user.routes"

const app = express()

app.use(express.json())

app.get("/", (_, response) => {
  response.send("Hello world!")
})

app.use("/users", userRouter)

export default app
