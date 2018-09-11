import { Comments } from '../lib'


export default {
  // 评论某文章
  comment (params) {
    return Comments.create(params)
  },

  // 获取某文章的评论
  getComments (page, limit, id) {
    if (page && limit && id !== null) {
      let skip = (page - 1) * limit

      return Promise.all(
        [
          Comments.find({article_id: id}).skip(skip).limit(limit).lean(),
          Comments.count()
        ]
      )
    } else {
      return Comments.find.sort({_id:-1})
    }
  },
}