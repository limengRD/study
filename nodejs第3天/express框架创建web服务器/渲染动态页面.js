const express = require('express')
const path = require('path')

const app = express()

const person = {
    name: '俊哥',
    nickname: '高婆婆',
    age: '26',
    gender: '妖人',
    hobby: ['吃饭', '睡觉', '瞎BB']
  }

app.set('view engine' , 'ejs')
app.set('views','./view')

app.get('/',(req,res)=> {
    res.render('index',person)
})
app.listen(3000,() => {
    console.log("http://127.0.0.1:3000")
})