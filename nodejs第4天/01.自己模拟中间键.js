const express =require('express')

const app = express()
const fs = require('fs')

const path = require('path')

app.use(myMiddleWare)

app.get('/', (req,res) => {
    res.send('ok')
})

app.get('/api/postinfo', (req,res) => {
    res.send('这是服务器处理的post结果')
})

app.get('/a/index.html',() => {
    res.send('这是一个首页');
})


function myMiddleWare (req,res,next) {
    const infoStr = `${new Date().toLocaleString()} ${req.method} ${req.url} \n`
    fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err) => {
        if(!err) console.log('写入ok')
        next();
    })
}

app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})