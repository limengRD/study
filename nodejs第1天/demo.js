const fs = require('fs');



fs.readFile('1.txt','utf-8',(err,data) => {
    if(err) return console.log(err.message);
    fs.writeFile('1-copy.txt',data,(err) => {
    if(err) return console.log(err.message);
    return console.log('成功');
});
})