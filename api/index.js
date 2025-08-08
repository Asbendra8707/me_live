const path = require('path')
const dotenv=require('dotenv')
dotenv.config()
const express= require('express')
const cors = require('cors')
const app= express()
app.use(cors())
app.use(express.static(path.join(__dirname,'dist')));
const connectDB= require('./db')
connectDB()
const router=require('./routes/userRoute')
app.use(express.json())


const User = require('./models/User')
const loginRouter=require('./routes/loginRoute')
const ContactRouter = require('./routes/ContactRoute')

app.use('/user',router)
app.use('/login',loginRouter)
app.use('/send',ContactRouter)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})

app.listen(process.env.PORT,()=>{
    console.log('Server running on port '+process.env.PORT);    
})
module.exports= (req,res)=>  app(req,res)

// to get JWT_SECRET thru terminal
//node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
