const express = require('express')

const app = express()

app.get('/',function (req,res) {
    res.send('ninini')
})

app.listen(4000, () => {
    console.log('http://127.0.0.1:4000')
})