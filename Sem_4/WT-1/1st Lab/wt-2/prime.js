let n=8;
let isPrime=true;
for(let i=2;i<n;i++){
    if(n%i==0){
        isPrime=false;
        break;
    }
}

if(isPrime){
    console.log("Number is prime");
}
else{
    console.log("Number is not prime");
}