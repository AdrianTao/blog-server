import { User as UserModel } from '../../models'
import sha1 from 'sha1'
import { createToken } from '../../middleware'

class User {
  constructor () {}

  login (req,res,next) {
    let username = req.body.username,
        password = sha1(req.body.password)
    UserModel.getUserByName(username)
      .then( (user) => {
        console.log('password', password)
        console.log('user password', user.password)
        console.log('user', user)
        if (user && (password === user.password)) {
          res.json({
            code: 200,
            token: createToken(username)
          })
        } else {
          res.json({
            code: -200,
            message: '用户名或密码错误'
          })
        }
      })
      .catch( err => {
        // 查找数据库发生错误，或者一些
        next(err)
        return res.json({
          code:-200,
          message:err.toString()
        })
      })
  }
}

export default new User()