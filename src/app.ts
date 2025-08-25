import express from "express"
import userRouter from "./routes/user.routes"
import taskRouter from "./routes/task.routes"

const app = express()

app.use(express.json())

app.get("/", (_, response) => {
  response.send("Hello world!")
})

app.use("/users", userRouter)
app.use("/tasks", taskRouter)

export default app
