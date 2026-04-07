// This is revision of previous class
const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send("Hellow world")
})

app.get('/about',(req,res)=>{
    res.send('This is About page')
})
app.get('/home',(req,res)=>{
    res.send("This is home page!")
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})