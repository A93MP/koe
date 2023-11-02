import { MongoClient } from 'mongodb'
import { NOSQL_DB } from '../../config/config.js'

const uri = NOSQL_DB.uri
const client = new MongoClient(uri)
let database
export async function initMongo () {
  await client.connect()
  console.log('Conectado a: Koe-NoSQL')
  database = client.db(NOSQL_DB.database)
}

export { database }
