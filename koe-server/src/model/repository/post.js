import { NOSQL_DB } from '../../config/config.js'
import { database } from './nosql-connection.js'

export const readPosts = async () => {
  const posts = await database.collection(NOSQL_DB.collection).find({})
  return posts
}
