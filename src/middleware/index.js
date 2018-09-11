import jsonwebtoken from 'jsonwebtoken'

// 验证token中间件
let checkToken = function (req, res, next) {
  if (req.headers['authorization']) {
    var token = req.headers['authorization'].split(' ')[1]
    console.log(token)
    var decoded = jsonwebtoken.decode(token, 'crazy')
    // 如果过期了就重新登录
    // 验证token也需要优化
    if(token&&decoded.exp<=Date.now()/1000){
      return  res.send({
        code:401,
        message:"授权已经过期，请重新登陆"
      })
    }
  } else {
    return  res.send({
      code:400,
      message:"未授权"
    })
  }

  next()
}

let createToken = function (name) {
  var expiry = new Date();
  expiry.setDate(expiry.getDate()+7);//有效期设置为七天
  const token = jsonwebtoken.sign({
    name:name,
    exp:parseInt(expiry.getTime()/1000)//除以1000以后表示的是秒数
  }, 'crazy')
  return token
}

export {
  checkToken,
  createToken 
}