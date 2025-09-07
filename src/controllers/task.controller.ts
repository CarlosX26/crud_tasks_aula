import { Request, Response } from "express"
import * as taskService from "../services/task.service"
import { request } from "http"

const createTask = async (request: Request, response: Response) => {
  const taskDTO = request.body
  console.log("🚀 ~ createTasks ~ tasksDTO:", taskDTO)
  const data = await taskService.createTask(taskDTO)
  return response.status(201).json(data).send()
}

const listTasks = async (request: Request, response: Response) => {
   const data = await taskService.listTasks()
   return response.status(200).json(data).send()
}

const listTasksById = async (request: Request, response: Response) => {
   const id = parseInt(request.params.id)

   const data = await taskService.listTasksById(id)

   return response.status(200).json(data).send()
  }

const updateTask = async (request: Request, response: Response) => {
  console.log(request.params.id)
  const id = parseInt(request.params.id)
  const taskDTO = request.body

  const data = await taskService.updateTask(id, taskDTO)

  return response.status(200).json(data).send()
}

const deleteTask = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id)

  await taskService.deleteTask(id)

  return response.status(204).send()
}

export { createTask, listTasks, listTasksById, updateTask, deleteTask }
