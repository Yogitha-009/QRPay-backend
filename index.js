const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const getAmount=require('./routes/getAmount')
const returnQr=require('./routes/returnQr')
const cors=require('cors')
require('dotenv').config()
app.use(cors())
app.use(bodyParser.json())
app.use('/getdata', getAmount)
app.use('/returnqr',returnQr)

async function startdb(){
    await mongoose.connect(process.env.MongoDb_URI)
    console.log("db connected successfully!")

    const port=process.env.PORT || 3001
    app.listen(port, () => {
        console.log("Server running on port 3001");
    });
}
startdb()