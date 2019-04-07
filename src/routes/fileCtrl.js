import express from 'express'
import FileCtrl from '../controller/fileCtrl/fileCtrl'
import multerObj from '../utils/multer'
import { checkToken } from '../middleware'

var router = express.Router()

// 上传图片 markdown内部
router.post('/fileCtrl/upload', checkToken, multerObj.single('file'), FileCtrl.upload)

export default router