const mongoose = require('mongoose');
const schema=mongoose.Schema;
var jwt = require('jsonwebtoken');
const userSchema= new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
userSchema.methods.generateToken =function() {
    try {
        return jwt.sign({
            userId: this._id,
            email: this.email,
            isAdmin: this.isAdmin
        },
        'secret',
        {
            expiresIn: "30d"
        });
    } catch(err) {
        console.error(err);
    }
};



const User= mongoose.model('User',userSchema);
module.exports=User;