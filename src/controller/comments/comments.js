import { Comments as CommentsModel } from '../../models'
import moment from 'moment'

class Comments {
  constructor () {}

  // 评论
  comment (req,res,next) {
    CommentsModel.comment(req.body)
      .then( (json) => {
        res.json({
          code: 200,
          message: '评论成功',
          data: json
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

  // 获取某一篇文章的评论
  getComments (req,res,next) {
    let { page, limit, id } = req.body
    CommentsModel.getComments(page, limit, id)
      .then( (json) => {
        let comments = json[0],
            total = json[1],
            totalPage = Math.ceil(total/limit),
            hasNext = totalPage>page?1:0,
            hasPrev = page>1

        comments.forEach( (item) => {
          item.created_at = moment(item.created_at).format('YYYY-MM-DD')
        })
  
        res.json({
          code: 200,
          message: '',
          data: {
            comments,
            hasNext,
            hasPrev
          }
        })
      })
      .catch( err => {
        res.send({
          code: -200,
          message: err.toString()
        })
      })
  }
}

export default new Comments()