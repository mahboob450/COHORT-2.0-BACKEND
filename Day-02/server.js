const express=require("express")

const app=express() // server instance create krna

app.get('/',(req,res)=>{
    res.send("hellow world")
})
app.get('/about',(req,res)=>{
    res.send("This is about page!")
})
app.get('/home',(req,res)=>{
    res.send("This is home page!")
})
app.listen(5000, () => {
    console.log("Server running on port 5000")
})