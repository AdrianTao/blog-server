import fs from 'fs'

export default {
  fileRename(file) {
    //这里修改文件名字
    let newFileName = new Date().getTime() + Math.random() + '.' + file.originalname.split('.')[1]
    fs.renameSync('./public/upload/' + file.filename, './public/upload/' + newFileName)
    return newFileName
  }
}