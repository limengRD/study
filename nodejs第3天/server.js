const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    console.log(req.url)
    res.writeHeader(200,{"Content-Type" : "text/html;charset=utf-8"})
    res.end('ok')
})

server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})
