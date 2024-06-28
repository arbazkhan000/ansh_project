
module.exports.validate=(schema)=>async(req,res,next)=>{
    try{
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    }
    catch(err){
        next({status:"422",message:err.errors[0].message});
    }
}