const express=require('express')
const router= express.Router()
const bcrypt = require('bcrypt');
const User=require('../models/User')
router.post('/',async(req,res)=>{
    const {name,email,password}=req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    try {
      const user= new User({name,email,passwordHash})
      await user.save();
      res.json({message:'User registered'})        
    } catch (error) {
        res.status(400).json({message: 'User already exists or error occurred' })
        console.error(error.message);       
    }
})
module.exports=router