import { Router } from 'express'
import { Login } from '../controller/pages.js'
import { getUsers } from '../controller/user.js'
export const router = Router()

// HANDLING CORS

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173'
]

const corsMiddleWare = function (req, res, next) {
  const origin = req.headers.origin
  if (ACCEPTED_ORIGINS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
  }
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, HEAD'
    )
  }
  next()
}
router.use(corsMiddleWare)

// ROUTES

router.get('/', Login)
router.get('/users', getUsers)
