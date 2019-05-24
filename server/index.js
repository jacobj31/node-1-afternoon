const express = require('express')


const {getProducts, 
    getProductsById} = require('./getProducts')
       
const app = express()
const port = 5395

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProductsById)

app.listen(port, () => {
    console.log('listening on port', port)
  })