import mysql from 'mysql2'
import { SQL_DB } from '../../config/config.js'
const pool = mysql.createPool(SQL_DB)

pool.getConnection(function (err) {
  if (err) throw err
  console.log(`Conectado a: ${SQL_DB.database}`)
})

export { pool }
