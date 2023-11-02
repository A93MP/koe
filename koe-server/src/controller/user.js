import { listPosts } from '../model/service/post.js'
import { listUsers } from '../model/service/user.js'

function createUser (email, pwd, userName) {
  return { email, pwd, userName }
}

export async function getUsers (_, res) {
  const users = await listUsers()
  const posts = await listPosts()
  res.json(users)
}

export function getPosts (_, res) {
  // res.end(posts)
}
