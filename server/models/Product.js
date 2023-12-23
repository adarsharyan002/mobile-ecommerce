const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  imgUrl: String,
  desc: String,
  warranty: String,
  // Add more properties as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
