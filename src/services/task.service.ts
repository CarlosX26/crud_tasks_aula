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

const listTasks = async () => {
  const taskRepository = AppDataSource.getRepository(Task)
  const tasks = await taskRepository.find()
  return tasks
}

const listTasksById = async (id: number) => {
  const taskRepository = AppDataSource.getRepository(Task)

  const task = await taskRepository.findOneBy({
    id,
  })
  return task
}

const updateTask = async (id: number, taskDTO: ITaskDTO) => {
  const taskRepository = AppDataSource.getRepository(Task)

  const task = await taskRepository.findOneBy({
    id,
  })

  const newDataTask = { ...task, ...taskDTO }

  const taskUpdated = await taskRepository.save(newDataTask)

  return taskUpdated
}

const deleteTask = async (id: number) => {
  const taskRepository = AppDataSource.getRepository(Task)

  await taskRepository.delete({
    id,
  })
  
  return {} // no return eu posso adicionar alguma mensagem?
}

export { createTask, listTasks, listTasksById, updateTask, deleteTask }
