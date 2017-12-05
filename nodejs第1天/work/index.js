const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname,'/成绩.txt');
const newDir = path.join(__dirname,'/成绩 - ok .txt')
fs.readFile(dir,'utf-8',(err,data) => {
    if(err) return console.log(err.message);
    let dataArr = data.split(' ');
    let newArr = [];
    for(var i = 0; i < dataArr.length; i++) {
        if(dataArr[i] != '') {
            var index = dataArr[i].indexOf('=');
            var newData = dataArr[i].replace(/=/,':');
            fs.appendFile(newDir,newData+'\n',(err) => {
                if(err) return console.log(err.message);
                return console.log('成功');
            })
        }
    }
})