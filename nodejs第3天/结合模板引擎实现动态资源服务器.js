const fs = require('fs');
const path = require('path');
const template = require('art-template');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    const person = {
        name: '俊哥哥',
        age: 30,
        gender: '妖',
        hobby: ['吃饭', '睡觉', '撩妹']
      }
    const html = template(path.join(__dirname,'/template.html'),person);
    if(req.url === '/template.html'){
       res.end(html); 
    } else {
        res.end('404')
    }

})

server.listen(3000, () => {
    console.log('http server running at http://127.0.0.1:3000')
})