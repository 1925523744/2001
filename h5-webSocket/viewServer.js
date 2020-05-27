//展示界面
//需要对静态界面操作,引入express使用static方法
const express  = require('express')
//
const app = express()

//设置端口、域名
const PORT = 5050
const HOST_NAME = '10.31.160.54'

const path = require('path')
//有路径，需要用到path模块,路径是当前目录下的client文件夹（）

app.use(express.static(path.join(__dirname,'/client')))

//监听
app.listen(PORT,HOST_NAME,()=>{
    //提示
    console.log(`网页展示的url是:http://${HOST_NAME}:${PORT}`)
})