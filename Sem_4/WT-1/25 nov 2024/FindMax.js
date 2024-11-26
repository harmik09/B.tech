var arr=[4,2,5,7,8];
var max=arr[0];
for(let i=0;i<=arr.length-1;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}

console.log(max);