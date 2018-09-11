/*
 * @Author: Adrian.taojun 
 * @Date: 2018-05-13 20:10:09 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-04 20:22:16
 * 
 * 数据库模型
 */

import mongoose from 'mongoose'
import moment from 'moment'
mongoose.connect("mongodb://localhost/my-story")

// 文章
let articlesSchema = new mongoose.Schema({
  classify: { type: String },
  title: { type: String },
  content: { type: String },
  time : { 
    type: Date,
    default: Date.now,
  }
})
articlesSchema.virtual('date').get(function () {
  console.log(moment(this.time).format('YYYY-MM-DD'))
  return moment(this.time).format('YYYY-MM-DD')
})
const Articles = mongoose.model('articles', articlesSchema)


// 用户评论
const Comments = mongoose.model('comments', new mongoose.Schema({
  // 主键用 _id
  article_id: { type: String },                   // 文章id
  reply_which_id: { type: String },                // 回复的id
  author: { type: String },                       // 评论者id
  content: { type: String },                      // 评论内容
  like_count: { type: Number, default: 0 },                   // 点赞数量
  created_at: { type:Date, default:Date.now }     // 创建时间
}))

// 分类
const Classify = mongoose.model('classify', new mongoose.Schema({
  classify: { type: String }
}))

// 用户
const User = mongoose.model('user', new mongoose.Schema({
  username: { type: String },
  password: { type: String }
}))

export {
  Articles,
  Comments,
  Classify,
  User,
}