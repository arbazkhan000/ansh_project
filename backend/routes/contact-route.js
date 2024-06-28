const express =require('express');
const Contact = require('../models/contact');
const router= express.Router()
const app=express();
app.use(express.json());

router.post('/contact',async(req,res)=>{
   try{
    const response=req.body;
    const newContact=new Contact(response);
    await newContact.save();
    res.send('message sent successfully');
   }
   catch(err){
    res.send(err)
   }
})

module.exports=router;