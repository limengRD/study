const express = require('express')
const app = express()




app.set('view engine','ejs')
app.set('views', './views')

app.use('/node_modules',express.static('./node_modules'))

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))

const router = require('./router')
app.use(router)


app.listen(4000,() => {
    console.log('http://127.0.0.1:4000')
})