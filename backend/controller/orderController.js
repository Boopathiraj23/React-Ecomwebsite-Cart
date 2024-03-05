const ordermodel = require('../models/ordermodel')
const order=require('../models/ordermodel')
const productmodel=require('../models/productmodel')

exports.createorders=async(req,res,next)=>{
     const cartitem=req.body
     const amount=Number(cartitem.reduce((acc,item)=>(acc+item.product1.price*item.qty),0)).toFixed(2)      
     // console.log(amount);
     const status='pending'
     const order=await ordermodel.create({cartitem,amount,status})
 
     cartitem.forEach(async(item)=>{
           const product=await productmodel.findById(item.product1._id)
          product.stock=product.stock - item.qty
          await product.save()
     })

     res.json({
          success:true,  
          order
     })
}