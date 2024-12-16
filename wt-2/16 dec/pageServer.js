const http=require('http')

 const server=http.createServer((req,res)=>{
    res.statusCode=200;

    if(req.url=="/" && req.method=="GET"){
        res.end("Home Page");
    }
    else if(req.url=="/about" && req.method=="GET"){
        res.end("About Page");
    }
    else if(req.url=="/contact" && req.method=="GET"){
        res.end("Contact Page");
    }
    else if(req.url=="/feedback" && req.method=="GET"){
        res.end("Feedback Page");
    }
    else if(req.url=="/portfolio" && req.method=="GET"){
        res.end("Portfolio Page");
    }
 })

server.listen(3000,()=>{
    console.log('Server Started at 3000');
});