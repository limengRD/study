const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer();

server.on('request',(req, res) => {
    const url = req.url
    res.writeHeader(200,{"Content-Type": "text/html;charset=utf-8"})
    if(url === '/index.html') {
        fs.readFile(path.join(__dirname,'/index.html'),(err,data) => {
            if(err) return res.end('404')
            res.end(data)
        })
    }

})
server.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})