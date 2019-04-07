import moment from 'moment'
import fs from 'fs'
import utils from '../../utils/utils'

class FileCtrl {
  constructor () {}

  // 上传文件
  upload (req,res,next) {
    if (req.file.length === 0) {  //判断一下文件是否存在，也可以在前端代码中进行判断。
      res.send({
        code: -200,
        message: '上传文件不能为空！'
      })
    } else {
      let file = req.file
      let fileInfo = {}
      let newFileName = utils.fileRename(file)

      // 设置响应类型及编码
      res.set({
        'content-type': 'application/json; charset=utf-8'
      })

      res.send({
        code: 200,
        data: {
          url: 'upload/' + newFileName // 因为public是根目录所以不需要带上
        },
        message: '上传成功'
      })
    }
  }
}

export default new FileCtrl()