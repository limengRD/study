const fs = require('fs')
const path = require('path')

function writeLogs(req,res,next) {
    const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
    // 调用 fs 记录日志
    fs.appendFile(path.join(__dirname, './info.txt'), infoStr, (err) => {
      if (err) return console.log('记录日志失败')
      console.log('记录日志成功')
      next()
    })
}

module.exports = writeLogs