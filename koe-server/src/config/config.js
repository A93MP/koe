import 'dotenv/config'

export const SQL_DB = {
  connectionLimit: 2,
  host: process.env.hostSQL,
  user: process.env.userSQL,
  password: process.env.passwordSQL,
  database: process.env.databaseSQL

}

export const NOSQL_DB = {
  uri: process.env.uri,
  database: process.env.databaseNOSQL,
  collection: process.env.collection
}
