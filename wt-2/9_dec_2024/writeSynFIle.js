const fs=require('fs');

const data="Hello "
fs.writeFileSync('Demo',data);

const readData=fs.readFileSync('Demo','utf-8');
console.log(readData);