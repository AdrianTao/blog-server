import { Articles as ArticlesModel } from '../../models'
import moment from 'moment'

class Article {
  constructor () {}

  // 获取文章列表
  getList (req, res, next) {
    // console.log(req.body)
    let { page, limit } = req.body
    ArticlesModel.getArticles(page, limit)
      .then( (json) => {
        // res.json(json)
        let articleLists = json[0],
            total = json[1],
            totalPage = Math.ceil(total / limit),
            hasNext = totalPage > page ? true : false,
            hasPrev = page > 1

        // 转格式
        articleLists.forEach( (item) => {
          item.time = moment(item.time).format('YYYY-MM-DD')
        })

        // console.dir(articleLists)
        res.json({
          code: 200,
          message: 'success',
          data: {
            articleLists,
            total,
            hasNext,
            hasPrev,
          }
        })
      })
      .catch( (err) => {
        next(err)
        return res.json({
          code: -200,
          message: err.toString()
        })
      })
  }

  // 根据classify获取文章列表
  getlistByClass (req, res, next) {
    let { classify, page, limit } = req.body
    ArticlesModel.getArticlesByClassify(page, limit, classify)
      .then( (json) => {
        let articleLists = json[0],
            total = json[1],
            totalPage = Math.ceil(total / limit),
            hasNext = totalPage > page ? 1 : 0,
            hasPrev = page > 1

        articleLists.forEach( (item)=>{
          delete item.__v
          item.time = moment(item.time).format('YYYY-MM-DD')
        })
  
        res.json({
          code: 200,
          message: 'success',
          data: {
            articleLists,
            hasNext,
            hasPrev
          }
        })
      })
      .catch( (err) => {
        next(err)
        return res.json({
          code: -200,
          message: err.toString()
        })
      })
  }

  // 新增文章
  createArticle (req,res,next) {
    ArticlesModel.addArticle(req.body)
      .then( (json) => {
        console.log(json)
        res.json({
          code: 200,
          message: '新增成功'
        })
      })
      .catch( (err) => {
        next(err)
        return res.json({
          code: -200,
          message: err.toString()
        })
      })
  }

  // 删除
  deleteArticle (req,res,next) {
    ArticlesModel.deleteArticle(req.body.id)
      .then( (json) => {
        if (json.ok && json.n>0) {
          res.send({
            code:200,
            message:'删除成功'
          })
        } else {
          throw new Error('该文章不存在')
        }
      })
      .catch(err=>{
        res.send({
          code:-200,
          message:err.toString()
        })
      })
  }

  // 获取一篇文章
  getOne (req,res,next) {
    ArticlesModel.getOne(req.body.id)
      .then( (json) => {
        console.dir(json)
        json[0].time = moment(json[0].time).format('YYYY-MM-DD')

        res.json({
          code: 200,
          message: '',
          data: json[0]
        })
      })
      .catch(err=>{
        res.send({
          code:-200,
          message:err.toString()
        })
      })
  }

  // 编辑文章
  edit (req,res,next) {
    console.log(req.body)
    let id = req.body.id,
        title = req.body.title,
        content = req.body.content
  
    ArticlesModel.editArticle(id, {title, content})
      .then( (result) => {
        console.dir(result)
        if (result.ok && result.n>0) {
          res.send({
            code: 200,
            message: '编辑成功'
          })
        } else {
          throw new Error('编辑失败')
        }
      })
      .catch(err => {
        res.send({
          code: -200,
          message:err.toString()
        })
      })
  }
}

export default new Article()