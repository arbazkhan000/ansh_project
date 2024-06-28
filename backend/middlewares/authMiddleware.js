const User = require('../models/user');
var jwt = require('jsonwebtoken');

const authMiddleware=async(req,res,next)=>{
    const token=req.header("Authorisation")
    if(!token){
        return res
        .status(401)
        .json({msg:"unauthorised http,token not provided"})
    }
    const jwtToken=token.split(" ")[1];

    console.log("token from auth middleware",jwtToken);

    try{
        const isVerified=jwt.verify(jwtToken,'secret');
        console.log("verified data",isVerified);
        const userData=await User.findOne({email:isVerified.email})
        .select({
            password:0,
        });
        console.log(userData);
        req.user=userData;
        req.token=jwtToken;
        next();

    }
    catch(err){
        return res
        .status(401)
        .json({msg:"unauthorised http,invalid token"})
    }

}

module.exports=authMiddleware;