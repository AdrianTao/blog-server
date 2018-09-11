import express from 'express'
import User from '../controller/user/user'

var router = express.Router()

router.post('/login', User.login)

export default router