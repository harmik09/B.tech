let fruit=["apple","banana","orange"]

fruit.push("strawberry")
console.log(fruit)

fruit.pop()
console.log(fruit)

fruit.shift()
console.log(fruit)

fruit.unshift("Lemon")
console.log(fruit)

console.log(fruit.length)

let vagitable=["potato", "tamato"]
let merge=fruit.concat(vagitable)
console.log(merge)

let copyArray=fruit.copyWithin()
console.log(copyArray)

console.log(fruit.splice(0,1))

console.log(fruit.sort())