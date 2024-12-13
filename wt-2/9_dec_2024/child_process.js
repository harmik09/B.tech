const child_process=require('child_process');

child_process.exec('echo hello world',(err,stdout,stdin)=>{
    if(err){
        console.log('Error:',err);
    } 
    else{
        console.log(stdout);
    }
})