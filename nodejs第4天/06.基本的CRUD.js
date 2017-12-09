const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node'
})

const p1 = {
    id: 3,
    username : "哇哈哈",
    age: 30,
    gender: '男'
}

// const sqlstr = `insert into users (username,age,gender) values ("${p1.username}",${p1.age},"${p1.gender}")`

// conn.query(sqlstr,(err,result) => {
//     if(err) return console.log(err)
//     console.log(result)
// })

// const sqlstr = 'insert into users set ?'
// conn.query(sqlstr, p1 , (err,result) => {
//     console.log(err)
//     console.log(result)
// })

// const sqlstr = 'delete from users where id=?'
// conn.query(sqlstr, 1, (err,result) => {
//     console.log(err)
//     console.log(result)
// })

const sqlst = 'update users set ? where id=?'
conn.query(sqlst,[p1,p1.id],(err,result) => {
    console.log(err)
    console.log(result)
})