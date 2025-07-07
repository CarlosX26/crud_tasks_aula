import { DataSource } from "typeorm"
import path from "path"
import "reflect-metadata"

const database = path.resolve(__dirname, "../database/db.sqlite")
const entities = path.resolve(__dirname, "./entities/*.ts")

const AppDataSource = new DataSource({
  type: "sqlite",
  database: database,
  entities: [entities],
  synchronize: true,
})

export default AppDataSource
