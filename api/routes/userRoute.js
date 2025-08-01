const express=require('express')
const router= express.Router()
const User=require('../models/User')
router.get('/',async(req,res)=>{
    try {
        const response= await User.find()
        res.json(response)
    } catch (error) {
        res.json({message:error.message})
        console.error(error.message);    
    }
})
router.post('/',async(req,res)=>{
    try {
      const response= await User.create(req.body)
      res.json(response)        
    } catch (error) {
        res.json({message:error.message})
        console.error(error.message);       
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const data = await User.findById(req.params.id);
        if(!data) return res.status(404).json({error:'User not found'});
        res.json(data);
    } catch (error) {
        res.status(500).json({error:'Server error'});
        console.error(error.message);  
    }
})
router.put('/:id',async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!data) return res.status(404).json({error:'User not found'});
        res.json(data);
    } catch (error) {
        res.status(500).json({error:'Server error'});
        console.error(error.message);  
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        if(!data) return res.status(404).json({error:'User not found'});
        res.json(data);
    } catch (error) {
        res.status(500).json({error:'Server error'});
        console.error(error.message);  
    }
})
module.exports=router