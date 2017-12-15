const http = require('http')
const server = http.createServer()
const urlModule = require('url')

server.on('request', (req, res) => {
  // 经过 使用 url 模块的解析转换，并使用对象的解构赋值，把 需要的  pathname 和 query 属性解构出来
//   const { pathname: url, query } = urlModule.parse(req.url, true)

    console.log(urlModule.parse(req.url))
  // console.log(query)

  /* const result = urlModule.parse(url)
  console.log(result) */

  // console.log(url)

  const person = {
    name: 'zs', age: 22, gender: '男'
  }


  if (url === '/api/getjsonp') {
    const str = `${query.callback}(${JSON.stringify(person)})`
    res.end(str)
  } else {
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})