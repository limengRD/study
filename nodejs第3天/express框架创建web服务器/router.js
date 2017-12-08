const express = require('express')

const router = express.Router()

const person1 = {
    name: '俊哥',
    nickname: '高婆婆',
    age: '26',
    gender: '妖人',
    hobby: ['吃饭', '睡觉', '瞎BB']
  }
  
  const xiaofu = {
    name: '付哥',
    nickname: '宝宝',
    age: 17,
    gender: '女',
    hobby: ['抽烟', '喝酒', '上钟']
  }
  
  const xiaoganggang = {
    name: '钢钢',
    nickname: '扛把子',
    age: 44,
    gender: '爷们',
    hobby: ['抠脚', '挤痘痘']
  }

  router.get('/',(req,res) => {
    res.render('index',person1)
  })

  router.get('/a',(req,res) => {
    res.render('index2',xiaoganggang)
  })

  router.get('/b',(req,res) => {
    res.render('index3',xiaofu)
  })

  module.exports = router;