const express = require('express')
const mongoose = require('mongoose');
const Blog = require('./modules/Addblog'); 


const cors=require('cors')
const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config()
console.log(process.env.MONGODB_URL)
main()
.then(()=>console.log("db coinnected"))
.catch(err => console.log(err));
app.use(cors({
  origin: 'http://localhost:5173' // Or '*', but it's less secure
}));
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.post('/',async (req,res)=>{
    try {
        if(!req.body){
                return res.status(400).json({error:"blog details are empty"})
        }
        const {title,content,author}=req.body
        const blog=new Blog({title,content,author})
        await blog.save()
        res.status(201).json({message:"blog added",data:blog})
    
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})
app.get('/',async(req,res)=>{
    try {
        const blogs=await Blog.find()
        res.status(200).json({message:"blog details received",data:blogs})
    } catch (error) {
         console.log(error)
        res.status(500).json({error:error.message})
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})