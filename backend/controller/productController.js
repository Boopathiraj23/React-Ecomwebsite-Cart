const productmodel=require('../models/productmodel')
exports.getproduts=async(req,res,next)=>{
    const query= req.query.keyword?{name :{
          $regex:req.query.keyword,
          $options:'i'
     }}:{}
     const products =await(productmodel.find(query))
     res.json({
          success:true,
          products
     })
}
exports.getsingleproducts=async(req,res,next)=>{
     // console.log(req.params.id +'ID');
    const singleproduct= await(productmodel.findById(req.params.id))
     res.json({
          success:true,
          singleproduct
     })
}