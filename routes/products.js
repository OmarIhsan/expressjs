const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', async (req, res) => {
    let result = await pool.query('select * from products')
    res.send(result.rows)
})

router.post('/', async (req, res) => {
    let name = req.body.name 
    let description = req.body.description
    let price = req.body.price
    let stock = req.body.stock
    let q = `insert into products (name, description, price, stock) values ('${name}', '${description}', ${price}, ${stock}) returning *`
    let r = await pool.query(q)
    res.send(r.rows[0])
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let q = `select * from products where id = ${id}`
    let r = await pool.query(q)
    if(r.rows.length == 0){
        res.send('not found product')
    }else{
        res.send(r.rows[0])
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    let q = `delete from products where id = ${id} returning *`
    let r = await pool.query(q)
    if(r.rows.length == 0){
        res.send('product not exist')
    }else{
        res.send(r.rows[0])
    }
})

module.exports = router