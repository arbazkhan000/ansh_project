const express =require('express');
const User = require('../models/user');
const router= express.Router()
const app=express();
app.use(express.json());
var bcrypt = require('bcryptjs');
const { validate } = require('../middlewares/validations');
const signupSchema=require('../validators/userValidations');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',(req,res)=>{
    res.send("hi")
});

router.post('/register',validate(signupSchema),async(req,res)=>{
    const {username,email,phone,password}=req.body;
    const existUser= await User.findOne({email});
    if(existUser){
        console.log('user exists');
      return res.status(500).send('user already exists')
    }
    const hashPassword= await bcrypt.hash(password,10);
    const createUser= new User({username,email,phone,password:hashPassword});
    await createUser.save();
    console.log("user saved");
    res.send({msg:createUser,token:await createUser.generateToken()});
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const existUser= await User.findOne({email});
    if(!existUser){
        return res.status(500).send('Invalid login credentials')
      }
    const enteredPassword=await bcrypt.compare(password,existUser.password);
    if(enteredPassword){
        console.log('login succesful');
        res.send({
            msg:'login successful',
            token:await existUser.generateToken()
        })
    }  
    else{
        console.log('invaid login credentials');
        res.status(500).send('Invalid login credentials')
    }

})


router.get('/user',authMiddleware,async(req,res)=>{
    try{
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData})

    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;