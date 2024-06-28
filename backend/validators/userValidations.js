// import { z } from "zod";
const z=require('zod')
const signupSchema=z.object({
    username:z
    .string({required_error:'username is required'})
    .trim()
    .min(3,{message:'name must be minimum 3 characters'})
    .max(255,{message:'name can be maximum 255 characters'}),
    
    email:z
    .string({required_error:'email is required'})
    .trim()
    .email({message:"invalid email"})
    .min(3,{message:'email must be minimum 3 characters'})
    .max(255,{message:'email can be maximum 255 characters'}),

    phone:z
    .string({required_error:'phone is required'})
    .trim()
    .length(10,{message:'phone no. has to be 10 characters'}),

    password:z
    .string({required_error:'password is required'})
    .min(7,{message:'password must be minimum 7 characters'})
    .max(1024,{message:'password can be maximum 1024 characters'}),
})

module.exports=signupSchema;