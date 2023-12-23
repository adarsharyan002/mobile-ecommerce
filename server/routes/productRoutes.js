const express = require('express');
const router=express.Router()


const {getAllProducts,getAllProductsById}= require('../controllers/product')

router.get('/posts',getAllProducts)
router.get('/posts/:id',getAllProductsById)

module.exports=router;