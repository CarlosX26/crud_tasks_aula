import AppDataSource from "../data-source"
import { User } from "../entities/users"

interface IUserDTO {
  name: string
  email: string
  age?: number
}

const createUser = async (userDTO: IUserDTO) => {
  console.log("🚀 ~ createUser ~ userDTO:", userDTO)
  const userRepository = AppDataSource.getRepository(User)

  const user = userRepository.create(userDTO)

  console.log("🚀 ~ createUser ~ user:", user)

  const userCreated = await userRepository.save(user)

  return userCreated
}

const getUsers = async () => {
  const userRepository = AppDataSource.getRepository(User)

  const users = await userRepository.find()

  return users
}

export { createUser, getUsers }
