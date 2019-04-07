import multer from 'multer'
let multerObj = multer({
  //设置文件存储路径
 dest: 'public/upload'   //upload文件如果不存在则会自己创建一个。
})

export default multerObj