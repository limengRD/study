const express = require('express')
const app = express()

const writeLogs = require('./05.myWriteLogs')
app.use(writeLogs)

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))



app.get('/',(req,res) => {
    res.end('/')
})

app.get('/a/index.html', (req, res) => {
    res.end('index')
})

app.post('/api/postinfo', (req,res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})

app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})