const fs=require('fs');

const fileData=fs.readFileSync('abc.txt','utf-8');

const arrData=fileData.split('');

let count=0;

for(const i in arrData){
    if(arrData[i]==='a' || arrData[i]==='e' || arrData[i]==='i' || arrData[i]=='o' || arrData[i]==='u'){
        count++;
    }
}

console.log(count)