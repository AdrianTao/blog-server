import express from 'express'
import Comments from '../controller/comments/comments'

var router = express.Router()

router.post('/comments/comment', Comments.comment)
router.post('/comments/getComments', Comments.getComments)

export default router