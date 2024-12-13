const fs=require('fs');

const data=fs.readFile('Demo','utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});

console.log('Hello World');