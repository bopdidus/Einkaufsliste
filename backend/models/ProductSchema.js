const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/testdatenbank").then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    amount:Number,
})

module.exports = mongoose.model("ProductModel", ProductSchema)