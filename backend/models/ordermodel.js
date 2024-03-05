const mongoose=require('mongoose')
const orderschema=new mongoose.Schema({
     cartitem:Array,
     amount:String,
     status:String,
     CreatedAt:Date
})
const ordermodel=mongoose.model('order',orderschema)
module.exports=ordermodel