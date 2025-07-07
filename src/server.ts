import app from "./app"
import AppDataSource from "./data-source"

const port = 3001

AppDataSource.initialize()
  .then(() => {
    console.log("database connected!")

    app.listen(port, () => {
      console.log(`app running on port ${port}.`)
    })
  })
  .catch((err) => console.log("error on initialize app."))
