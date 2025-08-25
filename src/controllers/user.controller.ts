import { Request, Response } from "express"
import * as userService from "../services/user.service"

const createUser = async (request: Request, response: Response) => {
  const userDTO = request.body
  console.log("🚀 ~ createUser ~ userDTO:", userDTO)

  const data = await userService.createUser(userDTO)

  return response.status(201).json(data).send()
}

const getUsers = async (request: Request, response: Response) => {
  const data = await userService.getUsers()

  return response.status(200).json(data).send()
}

const getUserById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id)

  const data = await userService.getUserById(id)

  return response.status(200).json(data).send()
}

const updateUser = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id)
  const userDTO = request.body

  const data = await userService.updateUser(id, userDTO)

  return response.status(200).json(data).send()
}

const deleteUser = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id)

  await userService.deleteUser(id)

  return response.status(204).send()
}

export { createUser, getUsers, getUserById, updateUser, deleteUser }
