const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getAllProductsById = async (req, res) => {
    
    try {
      const product = await Product.findById(req.params.id);
      if (product === null) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

module.exports={
    getAllProducts,getAllProductsById
}
  