import { Articles } from '../lib'

export default {
  // 添加文章
  addArticle (params) {
    return Articles.create(params)
  },

  // 获取文章列表
  getArticles (page, limit) {
    if (page && limit) {
      let skip = (page - 1) * limit
      
      return Promise.all([
        // 返回忽略content字段
        Articles.find({}, {content: 0}).skip(skip).limit(limit).lean(),
        Articles.count()
      ])
    } else {
      return Articles.find().sort({_id:-1})
    }
  },

  // 根据分类获取所有文章
  getArticlesByClassify (page, limit, classify) {
    if (page && limit && classify) {
      let skip = (page - 1) * limit

      return Promise.all([
        // 返回忽略content字段
        Articles.find({classify}, {content: 0}).skip(skip).limit(limit).lean(),
        // Articles.find({classify}).skip(skip).limit(limit),
        Articles.count()
      ])
    } else {
      return Articles.find().sort({_id:-1})
    }
  },

  // 删除文章
  deleteArticle (id) {
    console.log('id', id)
    return Articles.remove({_id: id})
  },

  // 获取某一篇文章
  getOne (id) {
    console.log('id', id)
    return Articles.find({_id: id}).lean()
  },

  // 编辑某一篇文章
  editArticle (id, data) {
    return Articles.update({_id:id}, {$set:data})
  }
}