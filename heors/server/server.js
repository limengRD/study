const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))



const router = require('./router.js')

app.use(router)

app.listen(5000,() => {
    console.log('http://127.0.0.1:5000')
})