const mongoose=require('mongoose')
const connectingdatabase=()=>{
     mongoose.connect(process.env.DB_URL).then((con)=>{
          console.log('Mongo Database Successfully Connected in : '+ con.connection.host);
     })
}
module.exports=connectingdatabase