// array is object type
const a = [1,2,3] //keep memory address
const b = [1,2,3] //keep memory address
console.log(a === b) //memory address of a === memory address of b // false

const c = b //alias key give memory address of b to c
console.log(c === b)
console.log(b)
console.log(c) 
c[0] = 'A'
console.log(b) // [A,2,3]
console.log(c) // [A,2,3]

a[0] = 555
console.log(a) // nothave roommamte b,c notchange
console.log(b)
console.log(c) 

//object data type is object type
const x = { id:1, title: 'JS'}
const y = { id:1, title: 'JS'}
const z = y
console.log(x === y)
console.log(z === y)

y.id = 888
console.log(x)
console.log(y)
console.log(z)

//primitive ไม่ยุ่งเกี่ยวกับใครทั้งนั้น ถ้ากำหนดค่าใหม่ roommate ไม่เปลี่ยนด้วย
let m = 5 //m stores 5
let n = 10 //n stores 10
let o = n //n assign 10 to o then o stores 10

m = 999 //m reassign to 999 then m stores 999
o = 1000 //o reaasign to 1000 then o stores 1000
console.log(o === n) //1000===10 //false
console.log(m) //999
console.log(n) //10
console.log(o) //1000