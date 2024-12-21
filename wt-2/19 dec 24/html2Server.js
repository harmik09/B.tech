const express=require('express');

const fs=require('fs');

const app=express();


app.get('/',(req,res)=>{
    res.setHeader('content-type','text/html')
    res.end(fs.readFileSync('./htmlFile.html'));
})

app.listen(3000,()=>{
    console.log('Server start at 3000')
})