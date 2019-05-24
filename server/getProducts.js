const products = require('../products.json')

const getProducts = (req, res) => {
    if(req.query.price){
       let filtered = products.filter(item => 
       item.price >= req.query.price)
       return res.status(200).send(filtered)
    }   
    res.status(200).send(products)
}


const getProductsById = (req, res) => {
    let{id} = req.params
    let product = products.find(product => 
        product.id === parseInt(req.params.id))
    if (!product) {return res.status(500).send('Item not in list')}
    res.status(200).send(product)
}

module.exports = {getProducts,
        getProductsById}   
    
