import { readUsers } from '../repository/user.js'

export const listUsers = () => {
  const usersList = readUsers()
  return usersList
}
