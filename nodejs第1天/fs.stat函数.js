const fs = require('fs');
const path = require('path');

var dir = path.join(__dirname,'./work/成绩 - ok .txt');
fs.stat(dir,(err,stats) => {
    if(err) return console.log(err.message);
    return console.log(fs.stats);
})