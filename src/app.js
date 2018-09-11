import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import multer from 'multer'
import routes from './routes'

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  
  //预检请求使用
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")

  next()
})

routes(app)
app.use(express.static('./public'))

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'))
})