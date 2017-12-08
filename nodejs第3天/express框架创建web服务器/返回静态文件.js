const express = require('express')
const path = require('path')

const app = express()

app.get('/index.html' ,(req,res) => {
    res.sendFile(path.join(__dirname,'./view/index.html'))
})

app.listen(4000,() => {
    console.log("http://127.0.0.1:4000")
})