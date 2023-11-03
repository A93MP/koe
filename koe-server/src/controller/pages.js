import fs from 'fs'
export const Login = (_, res) => {
  const url = new URL('../koe.html', import.meta.url)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  const html = fs.readFileSync(url)
  res.end(html)
}
