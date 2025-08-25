import AppDataSource from "../data-source"
import { Task } from "../entities/tasks"

interface ITaskDTO {
  desc: string
}

const createTask = async (taskDTO: ITaskDTO) => {
  const taskRepository = AppDataSource.getRepository(Task)

  const savedTask = await taskRepository.save(taskDTO)

  return savedTask
}

export { createTask }
