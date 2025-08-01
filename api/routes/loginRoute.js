const express=require('express')
const loginRouter= express.Router()
const User=require('../models/User')
loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;  
    try {
      const user = await User.findOne({ email });
      if (!user) return res.json({ success: false, message: 'Email not found' });
  
      if (user.password !== password) {
        return res.json({ success: false, message: 'Incorrect password' });
      }
  
      res.json({ success: true, message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
  });
  module.exports=loginRouter