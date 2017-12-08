const http = require('http')

const server = http.createServer()

server.on('request',(req,res) => {
    const url = req.url

    if(url === '/index.html') {
        res.end('index')
    }
})

server.listen(3000,function () {
    console.log('server running at http://127.0.0.1:3000')
})