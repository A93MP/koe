import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { initMongo } from './src/model/repository/nosql-connection.js'
import { router } from './src/router/routes.js'
const PORT = process.env.PORT || 3000
const HOSTNAME = '127.0.0.1'
export const app = express()
const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded())
app.use(router)
app.use(express.static(path.join(__dirName, 'public')))

app.listen(PORT, () => {
  initMongo()
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`)
})
