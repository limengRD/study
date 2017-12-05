const fs = require('fs')

fs.appendFile('1.text','dfkjdlkfj',(err) => {
    if(err) return console.log(err.message)
    console.log('成功')
})