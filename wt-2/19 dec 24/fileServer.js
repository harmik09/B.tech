const express=require('express');

const fs=require('fs');

const app=express();

app.get('/',(req,res)=>{
    const data=fs.readFileSync('textfile.txt','utf-8');
    res.send(data);
})

app.listen(3000,()=>{
    console.log('Server start at 3000')
})