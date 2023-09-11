//5. create array with Array.from()
//copy ค่าใดค่านึงมา
const x = [1,2,4,6,8,16,32]
const y = Array.from(x) //...x
console.log(x)
console.log(y)
console.log(y.length)

// memory address so not equal
if (x === y)console.log('x === y')
else console.log('x!==y')

// x=y // alias
if (x === y)console.log('x === y')
else console.log('x!==y')