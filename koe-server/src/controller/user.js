import { listUsers } from '../model/service/user.js'

function createUser (email, pwd, userName) {
  return { email, pwd, userName }
}

export function getUsers (_, res) {
  const users = listUsers()
  res.end(users)
}
