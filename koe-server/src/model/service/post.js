import { readPosts } from '../repository/post.js'

export const listPosts = async () => {
  const postsList = await readPosts()
  return postsList
}
