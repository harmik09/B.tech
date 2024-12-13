let sum=0,n=5;
for(let i=1;i<=n;i++){
    if(i%2==0){
        sum-=i;
    }
    else{
        sum+=i;
    }
}
console.log(sum);