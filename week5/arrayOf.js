//4. create array with array.of
const x = Array.of(10) //10 = Element in Array เอาสิ่งในวงเล็บมาสร้างเป็น Array
console.log(x)
console.log(x.length)

const y = Array.of(x)//จะกลายเป็น Array 2 มิติ
console.log(y)
console.log(y.length)

const z = Array.of('1',1+1,true)//ใส่นิพจน์กำหนดค่าเบย
console.log(z)
console.log(z.length)