import express from 'express'
import Comments from '../controller/comments/comments'
import { checkToken } from '../middleware'

var router = express.Router()

router.post('/comments/comment', Comments.comment)
router.post('/comments/getComments', Comments.getComments)
router.post('/comments/delete', checkToken, Comments.del)

export default router