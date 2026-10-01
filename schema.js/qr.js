const mongoose=require('mongoose')
const qrSchema=mongoose.Schema({
    amount:Number,
    purpose:String,
    numberofscans:Number
})

const qr=mongoose.model("qr",qrSchema);
module.exports=qr;