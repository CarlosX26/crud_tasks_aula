import { Router } from "express"
import * as taskController from "../controllers/task.controller"

const taskRouter = Router()

taskRouter.post("", taskController.createTask)

export default taskRouter
