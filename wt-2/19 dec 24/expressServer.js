const express=require('express');

const app=express();

app.get('/home',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.get('/contact',(req,res)=>{
    res.send('contact Page');
})

app.get('/feedback',(req,res)=>{
    res.send('feedback Page');
})

app.get('/review',(req,res)=>{
    res.send('review Page');
})

app.listen(3000, ()=>{
    console.log('Server start at 3000');
})