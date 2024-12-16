const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const data=fs.readFileSync('textFile.txt','utf-8');
    res.end(data);
})

server.listen(3000,()=>{
    console.log('server is running on port 3000');
})