const express = require('express')
const app = express();
app.use(express.json());

const products = [{
    id : 1,
    name : 'pen'
},{
    id : 2,
    name : 'pencil'
}]

app.get('/api/product/readAll', (req,res) => {
    res.send(products)
});

app.get('/api/product/find/:id', (req,res) => {
    res.send(products.find(product =>product.id === parseInt(req.params.id)))
});
app.post('/api/product/create', (req,res)=>{
    products.push({
        id : products.length+1,
        name : req.body.name
    })
    res.send(products)
});
app.put('/api/product/update',(req,res)=>{
    const productId = products.find(product =>product.id === req.body.id)
    productId.name = req.body.name
    res.send(products)
});

app.delete('/api/product/delete/:id',(req,res)=>{
    const product = products.filter(product =>product.id !== parseInt(req.params.id))
    res.send(product)
});

const port = process.env.PORT || 8000;
app.listen(port,() => {console.log('server is running on ${port}');
});
