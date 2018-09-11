import { Classify as ClassifyModel } from '../../models'

class Classify {
  constructor () {}

  // 创建分类
  createClass (req,res,next) {
    ClassifyModel.createClass(req.body)
      .then( (json ) => {
        console.log(json)
        // if (ok && n>1) {
          res.send({
            code: 200,
            message: '创建成功'
          })
        // } else {
        //   throw new Error('创建失败')
        // }
      })
      .catch( err => {
        res.send({
          code: -200,
          message: err.toString()
        })
      })
  }

  // 删除分类
  deleteClass (req,res,next) {
    ClassifyModel.deleteClass(req.body.id)
      .then( (json) => {
        if (json.ok && json.n>0) {
          res.send({
            code: 200,
            message: '删除成功'
          })
        } else {
          // 删除不存在的项
          throw new Error('该分类不存在')
        }
      })
      .catch(err => {
        res.send({
          code: -200,
          message: err.toString()
        })
      })
  }

  // 编辑分类
  updateClass (req, res, next) {
    let id = req.body.id,
        classify = req.body.classify
    ClassifyModel.updateClass(id, {classify})
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

  // 获取所有分类
  findAllClass (req,res,next) {
    ClassifyModel.findAllClass()
      .then( (list) => {
        res.send({
          code: 200,
          data: list
        })
      })
      .catch(err => {
        res.send({
          code: -200,
          message: err.toString()
        })
      })
  }
}

export default new Classify()