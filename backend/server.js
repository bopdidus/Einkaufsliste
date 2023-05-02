const express = require('express');
const cors = require('cors')
const app = express()
const ProductModel = require('./models/ProductSchema')

app.use(express.json())
app.use(cors());

app.get('/api/', (req, res)=>{
     ProductModel.find({}).then(alle=>{
        res.send(alle);
     })
    
})
app.delete('/api/:productname', (req, res)=>{
    if(req.params.productname == undefined || req.params.productname == null)
    {
        res.status(400).send("Bad request")
    }
    paramName = req.params.productname

    ProductModel.findOneAndDelete({"name": paramName}).then(doc=>{
        res.status(201).send(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

app.post('/api/', (req, res)=>{
    console.log(req.body.name)
    if(req.body.name == undefined || req.body.name == null)
    {
        res.status(400).send("Bad request")
    }
    else{
        console.log(req.body)
        const newProduct = new ProductModel(req.body)
        newProduct.save().then(doc=>{
            if(!doc || doc.length === 0)
                return res.status(500).send(doc)

            res.status(201).send(doc)
        }).catch(err=>{
            res.status(500).json(err)
        })
    
    }
    
})
app.put('/api/', (req, res)=>{
    if(req.body.name == undefined || req.body.name == null || req.body.newName == undefined || req.body.newName == null)
    {
        res.status(400).send("Bad request")
    }
    else{
        ProductModel.findOneAndUpdate({"name": req.body.name},{"name": (req.body.newName)?req.body.newName: req.body.name, 
        "price": req.body.price, "description": req.body.description}).then(doc=>{
            res.status(200).send(doc)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
        
    }
    
})
app.listen("5000", () => console.log("Listening on port 5000 ...."));




