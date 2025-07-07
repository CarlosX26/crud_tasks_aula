import { Request, Response } from "express"
import * as userService from "../services/user.service"

const createUser = async (request: Request, response: Response) => {
  const userDTO = request.body
  console.log("🚀 ~ createUser ~ userDTO:", userDTO)

  const data = await userService.createUser(userDTO)

  return response.status(201).json(data).send()
}

const getUsers = async (request: Request, response: any) => {
  const data = await userService.getUsers()

  return response.status(200).json(data).send()
}

export { createUser, getUsers }
