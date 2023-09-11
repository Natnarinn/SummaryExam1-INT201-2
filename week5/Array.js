//array can contains datatype in one array
const x=[1, true, 'A']
console.log(x)
console.log(x.length) // see length
console.log([0]) // หา indexที่ 0 ว่าคือตัวอะไร
x[1] = false //เปลี่ยนค่า ตามแต่ละ index เจอก้ามปูเมื่อไหร่ คือทำตาม index
x[x.length] = 555 //append an new element
x.push(888) //append an new element for ง่ายๆ
console.log(x)
console.log(x[x.length-1]) // หา index ตัวสุดท้าย ว่าคือตัวอะไร

const y = []
let z
console.log(typeof y)
console.log(typeof z)

if(y.length===0) console.log('y is empty')
else console.log('y is not an empty') //check y empty ไหม

if(z?.length===0) console.log('z is empty')
else console.log('z is not an empty') // ไม่เกิด error กรณี undefined ใช้ optional
