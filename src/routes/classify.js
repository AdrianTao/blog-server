import express from 'express'
import Classify from '../controller/classify/classify'
import { checkToken } from '../middleware'

var router = express.Router()

router.post('/classify/create', checkToken, Classify.createClass)
router.post('/classify/delete', checkToken, Classify.deleteClass)
router.post('/classify/edit', checkToken, Classify.updateClass)
router.get('/classify/list', Classify.findAllClass)

export default router