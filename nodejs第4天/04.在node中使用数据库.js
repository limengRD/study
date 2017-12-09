const mysql = require('mysql')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node'
})

const sqstr = 'select * from users'
conn.query(sqstr,(err,results) => {
    console.log(err)
    console.log(results)
})