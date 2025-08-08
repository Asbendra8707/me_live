const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginRouter = express.Router()
const User = require('../models/User')

let SECRET;

try {
    SECRET = process.env.JWT_SECRET
    if(!SECRET) throw new Error('JWT_SECRET missing')
} catch (error) {
    console.error('JWT_SECRET Error:',error.message)
    process.exit(1);
}

loginRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ message: 'Unauthorized' });

    const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: '1h' });

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = loginRouter