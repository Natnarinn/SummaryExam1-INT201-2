//การเปรียบเทียบว่า Empty ไหม

//ไม่ให้ใช้value function
//JSON ทำให้ทั้งหมดเป็น String
const obj1 = {}
const obj2 = { id: 1 }
console.log(JSON.stringify(obj1)) //return string
console.log(JSON.stringify(obj2)) //return string

// //compare whether object is empty or not by using JSON.stringify เปรียบเทียบว่า Empty ไหม
// if (JSON.stringify(obj1) === '{}') console.log('Object is an empty')
// else console.log('Object is not empty')

// if (JSON.stringify(obj2) === '{}') console.log('Object is an empty')
// else console.log('Object is not empty')

function isEmpty(obj) {
  return JSON.stringify(obj2) === '{}'
}
console.log(isEmpty(obj1))
console.log(isEmpty(obj2))
