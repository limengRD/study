const express = require('express')
const router = express.Router()

const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node'
})

router.get('/api/heros', (req,res) => {
    const sqlstr = 'select * from users'
    conn.query(sqlstr, (err,result) => {
        console.log(result)
        res.send(result)
    })
})

router.post('/api/hero',(req,res) => {
    const id = req.body.id
    const sqlstr = 'select * from users where id=?';
    conn.query(sqlstr,id,(err,result) => {
        res.send(result)
    })
})

router.post('/api/delhero',(req,res) => {
    const id = req.body.id
    const sqlstr = 'update users set isdel=1 where id=?'
    conn.query(sqlstr,id,(err,result) => {
        res.send(result)
    })
})

router.post('/api/uphero',(req,res) => {
    const sqlstr = 'update users set ? where id=?'
    conn.query(sqlstr,[req.body,req.body.id],(err,result) => {
        res.send(result)
    })
})

router.post('/api/addhero',(req,res) => {
    const sqlstr = 'insert into users set ?'
    conn.query(sqlstr,req.body,(err,result) => {
        res.send(result)
    })
})
module.exports = router