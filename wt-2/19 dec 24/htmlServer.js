const express=require('express');

const fs=require('fs');

const app=express();


app.get('/',(req,res)=>{
    res.end(fs.readFileSync('./droneView.jpg'));
})

app.listen(3000,()=>{
    console.log('Server start at 3000')
})