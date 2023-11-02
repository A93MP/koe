import 'dotenv/config'

export const SQL_DB = {
  connectionLimit: 2,
  host: process.env.hostSQL || process.env.local.hostSQL,
  user: process.env.userSQL || process.env.local.userSQL,
  password: process.env.passwordSQL || process.env.local.passwordSQL,
  database: process.env.databaseSQL || process.env.local.databaseSQL

}
