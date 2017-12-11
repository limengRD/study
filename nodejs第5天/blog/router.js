const express = require('express')
const router = express.Router()

const conn = require('./mysql')

router.get('/index', (req,res) => {
    res.render('index',{a:{a:1}})
})
router.get('/login',(req,res) => {
    res.render('./user/login')
})

router.get('/register',(req,res) => {
    res.render('./user/register')
})
router.post('/register',(req,res) => {
    console.log(req.body)
    if(req.body.username.length <= 0 || req.body.password.length <= 0 || req.body.nickname.length <= 0) {
        return res.json({err_code: 1, message: '注册失败，请填写完整的表单数据！' })
    } 
    conn.query('select count(*) as count from user where username= ?',req.body.username, (err,result) => {
        if(result[0].count !== 0 ) {
            return res.json({err_code: 1, message: '用户名已存在！'})
        } 
        
    })
   
    conn.query('insert into user set ?',req.body, (err,result) => {
        console.log(result.affectedRows)
        if(result.affectedRows !== 1) return res.json({err_code: 1 ,message: '注册用户失败'})
        res.json({err_code: 0 , message: '注册用户成功'})
    })
})


module.exports = router