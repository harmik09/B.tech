function display(sum){
    console.log("Summation:",sum)
}

function sum(a,b,myCallback){
    let sum=a+b
    myCallback(sum)
}

let a=10
let b=20
sum(a,b,display)