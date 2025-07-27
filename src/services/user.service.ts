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

const getUserById = async (id: number) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({
    id,
  })

  return user
}

const updateUser = async (id: number, userDTO: IUserDTO) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({
    id,
  })

  const newDataUser = { ...user, ...userDTO }

  const userUpdated = await userRepository.save(newDataUser)

  return userUpdated
}

const deleteUser = async (id: number) => {
  const userRepository = AppDataSource.getRepository(User)

  await userRepository.delete({
    id,
  })

  return {}
}

export { createUser, getUsers, getUserById, updateUser, deleteUser }
