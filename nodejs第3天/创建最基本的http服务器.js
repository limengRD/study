const http = require('http')
const server = http.createServer()

server.on('request', function (req,res) {
    console.log('ok')
    res.end('hello world')
})

server.listen(3000,function () {
    console.log('通知大家,服务器已经启动!')
})