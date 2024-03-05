const express=require('express')
const dotenv=require('dotenv')
const app=express()
const cors=require('cors')
const path=require('path')
// const connectingdatabase=require('./config/connectingdatabase')
const connectdb=require('./config/connectingdatabase')
dotenv.config({path:path.join(__dirname,'config','config.env')})

const products1=require('./Routes/products')
const orders1=require('./Routes/orders')
connectdb()
app.use(express.json())
app.use(cors())
app.use('/api/v1/',products1)
app.use('/api/v1/',orders1)
app.listen(process.env.PORT,()=>{
     console.log(`Your Port ${process.env.PORT} server started...!`)
})


