const mongoose = require('mongoose');
const schema=mongoose.Schema;

const contactSchema= new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    message:{
        type:String,
        required:true
    }
});

const Contact =mongoose.model('Contact',contactSchema);
module.exports=Contact;