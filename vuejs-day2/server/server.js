const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const router = require('./router')

app.use(router)


app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})