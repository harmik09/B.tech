const fs=require('fs');

const arr=[{id:1,name:'harmik',mno:'9723975820',eno:'24010101680',spi:8.74},
    {id:2,name:'tirth',mno:'9723972820',eno:'240101011618',spi:7.74},
    {id:3,name:'deep',mno:'9723215820',eno:'24010101611',spi:8.19}
]

const data=JSON.stringify(arr);

fs.writeFile('studentDetail.txt',data,'utf-8',(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Success');
    }
})