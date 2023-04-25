
class Produkt{
    
    constructor(_name){
        this.name = _name;
    }
    
}
/************************************************** */
const express = require('express');
const cors = require('cors')
const app = express()

var produkte = [
    new Produkt("Banane"),
    new Produkt("Apple"),
    new Produkt("orange")
]

app.use(express.json())
app.use(cors());

app.get('/api/', (req, res)=>{
    res.send(produkte);
})
app.delete('/api/:productname', (req, res)=>{
    if(req.params.productname == undefined || req.params.productname == null)
    {
        res.status(400).send("Bad request")
    }
    paramName = req.params.productname

    let copyarray = []
    produkte.forEach((elem, ind)=>{
        if(elem.name != paramName){ copyarray.push(elem)}
    })
    produkte = copyarray
    res.status(201).send(new Produkt(paramName))
})

app.post('/api/', (req, res)=>{
    console.log(req.body.name)
    if(req.body.name == undefined || req.body.name == null)
    {
        res.status(400).send("Bad request")
    }
    else{
        const newProduct = new Produkt(req.body.name)
        produkte.push(newProduct);
        res.status(200).send(newProduct)
    }
    
})
app.put('/api/', (req, res)=>{
    if(req.body.name == undefined || req.body.name == null || req.body.newName == undefined || req.body.newName == null)
    {
        res.status(400).send("Bad request")
    }
    else{
        foundProduct = produkte.find(elem => elem.name == req.body.name) 
        
        if(foundProduct == null || foundProduct == undefined){res.status(404).send("Product not found")}
        console.log(foundProduct)
        let index = produkte.indexOf(foundProduct)
        produkte[index].name = req.body.newName
        res.status(200).send(foundProduct)
    }
    
})
app.listen("5000", () => console.log("Listening on port 5000 ...."));




