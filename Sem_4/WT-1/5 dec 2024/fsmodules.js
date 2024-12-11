const fs=require('fs');

// file check

fs.exists('demo',(exists)=>{
    if(exists){
        console.log('file exists');
    }
    else {
        console.log('error');
    }
});

// write file
fs.writeFile('demo','Hello World','utf-8',(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Success');
    }
})


// // read file

fs.readFile('demo', (err, data) => {
    if(err){
        console.log('error');
    }
    else{
        console.log(data.toString());
    }
  });
  
  // stat file
  fs.stat('demo',(err, data)=>{
    if(err){
        console.log(data);
    }
    else{
        console.log(data)
    }
  })