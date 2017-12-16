const express = require('express')
const router = express.Router()

const control = require('./control.js')

router.get('/api/getproduct',control.getProduct)

router.post('/api/addproduct',control.addProduct)

router.get('/api/delproduct',control.delProduct)

module.exports = router