const express=require('express')
const router=express.Router()
const {createorders} = require('../controller/orderController')
router.route('/createorder').post(createorders)
module.exports=router