import express from 'express'
// import bodyParser from 'body-parser'
// let urlencodedParser = bodyParser.urlencoded({ extended: false })
import Article from '../controller/article/article'
import { checkToken } from '../middleware'

var router = express.Router()

router.post('/article/getList', Article.getList)
router.post('/article/getlistByClass', Article.getlistByClass)
router.post('/article/add', checkToken, Article.createArticle)
router.post('/article/delete', checkToken, Article.deleteArticle)
router.post('/article/getOne', Article.getOne)
router.post('/article/edit', checkToken, Article.edit)

export default router