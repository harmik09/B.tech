const fs=require('fs');

fs.copyFile('abc.txt', 'xyz.txt', (err)=>{
    if(err)
        console.log('error')
    else
        console.log('Success')
});
