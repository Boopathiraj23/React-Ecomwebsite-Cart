const mangoose=require('mongoose')
const productschema= new mangoose.Schema({
     name: String,
     price: String,
     description: String,
     rating: String,
     images:[
          {
               image: String
          }
     ],
     category:String,
     seller:String,
     stock:String,
     numofReviwes:String,
     createdAt:Date
})
const productmodel=mangoose.model('product',productschema)
module.exports=productmodel