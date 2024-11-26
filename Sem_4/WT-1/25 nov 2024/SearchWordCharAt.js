var str="My name is Harmik"

const arr=str.split(" ")

// console.log(arr[0])

let word="Harmik"

for(let i=0;i<=arr.length;i++){
    if(arr[i]===word){
        console.log(i+1)
    }
}