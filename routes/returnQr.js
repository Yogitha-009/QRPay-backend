const mongoose=require('mongoose')
const Router=require('express')
const router=Router()
const qr=require('../schema.js/qr')

router.get('/:token',async function(req,res){
    const token=req.params.token;
    const newQr=await qr.findOne({_id:token})
    if(newQr){
        if(newQr.numberofscans<1){
            newQr.numberofscans=1;
            newQr.save().then(console.log("qr is valid"))
            res.json({mssg:"valid qr"})
        }
        else{
            res.json({mssg:"this qr is already scanned"})
        }
    }
    else{
        res.json({mssg:"invalid qr"})
    }
})

module.exports=router