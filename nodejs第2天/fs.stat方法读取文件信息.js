const fs = require('fs');
const path = require('path');
fs.stat(path.join(__dirname,'/file/1.txt'),(err,stats) => {
    if(err) return console.log(err.message)
    console.log(stats.size)
    console.log(stats.isFile())
})