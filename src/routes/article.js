import express from 'express'
import Article from '../controller/article/article'
import multerObj from '../utils/multer'
import { checkToken } from '../middleware'

var router = express.Router()

router.post('/article/getList', Article.getList)
router.post('/article/getlistByClass', Article.getlistByClass)
router.post('/article/add', checkToken, multerObj.single('file'), Article.createArticle)
router.post('/article/delete', checkToken, Article.deleteArticle)
router.post('/article/getOne', Article.getOne)
router.post('/article/edit', checkToken, multerObj.single('file'), Article.edit)

export default router