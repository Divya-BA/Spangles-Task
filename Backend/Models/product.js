const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images:[{type: String, required: true }],
  sizes:[{type: String, required: true }],
  amounts:[{type: Number, required: true }]
});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;
