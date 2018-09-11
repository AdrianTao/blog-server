import { Classify } from '../lib'

export default {
  // 创建分类
  createClass (params) {
    return Classify.create(params)
  },

  // 删除分类
  deleteClass (id) {
    console.log('删除分类id: ', id)
    return Classify.remove({_id: id})
  },

  // 编辑分类
  updateClass (id, data) {
    return Classify.update({_id:id}, {$set:data})
  },

  // 获取所有分类
  findAllClass () {
    return Classify.find()
  }
}