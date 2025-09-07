import { Router } from "express"
import * as taskController from "../controllers/task.controller"

const taskRouter = Router()

taskRouter.post("", taskController.createTask)
taskRouter.get("", taskController.listTasks)
taskRouter.get("/:id", taskController.listTasksById)
taskRouter.patch("/:id", taskController.updateTask)
taskRouter.delete("/:id", taskController.deleteTask)

export default taskRouter
