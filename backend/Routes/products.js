const express=require('express');
const { getproduts, getsingleproducts } = require('../controller/productController');
const router=express.Router();
router.route('/products').get(getproduts)
router.route('/singleproduct/:id').get(getsingleproducts)
module.exports=router