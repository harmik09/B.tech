const fs=require('fs')

const fileData=fs.readFileSync('abc.txt','utf-8')

const arrData=fileData.split(' ')

console.log(arrData.length)