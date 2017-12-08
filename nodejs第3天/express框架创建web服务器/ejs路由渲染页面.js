const router = require('./router.js')
const express = require('express')
const app = express()

app.set('view engine' , 'ejs')
app.set('views' , './view')

app.use(router)

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000")
})