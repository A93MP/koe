import { pool } from './sql-connection.js'

export const readUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM UserInfo', (err, results) => {
      if (err)reject(err)
      resolve(results)
    })
  })
}
