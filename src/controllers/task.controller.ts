import { Request, Response } from "express"
import * as taskService from "../services/task.service"

const createTask = async (request: Request, response: Response) => {
  const taskDTO = request.body
  console.log("🚀 ~ createTasks ~ tasksDTO:", taskDTO)
  const data = await taskService.createTask(taskDTO)
  return response.status(201).json(data).send()
}

const getTasks = async (request: Request, response: Response) => {
  // const data = await taskService.getTasks()
  // return response.status(200).json(data).send()
}

export { createTask, getTasks }
