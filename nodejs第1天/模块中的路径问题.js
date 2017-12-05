const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname,'/1.text')
fs.readFile(dir,'utf-8',(err,data) => {
    if(err) return console.log(err.message);
    return console.log(data)
})