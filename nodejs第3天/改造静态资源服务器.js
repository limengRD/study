const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request',(req,res) => {
    const url = req.url
    res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'})
    if(url === "/view/index.html") {
        readHtmlFile(res,url)
    }
})

server.listen(3000, () => {
    console.log("http://127.0.0.1:3000")
})

function readHtmlFile(res,url) {
    fs.readFile(path.join(__dirname,url),(err,data) => {
        if(err) return res.end(err.message)
        res.end(data)
    })
}