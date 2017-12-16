const conn = require('./model')


function getProduct(req,res) {
    const sqlstr = 'select * from products'
    conn.query(sqlstr,(err,result) => {
        res.send(result)
    })
}

function addProduct(req,res) {
    const data = req.body
    const sqlstr = 'insert into products set ?'
    conn.query(sqlstr,data,(err,result) => {
        res.send(result)
    })
}

function delProduct(req,res) {
    const id = req.query
  
    const sqlstr = 'delete from products where id=?'
    conn.query(sqlstr,id.id,(err,result) => {
        res.send(result)
    })
}
module.exports = {
    getProduct,
    addProduct,
    delProduct
}