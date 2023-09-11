//1. create array by literal
const x = [1, 3, 5, 7, 9]

//2.elements are object data types
const student = [
    {id:1, name: 'Somchai'},//comma ขั้น elements
    {id:2, name: 'Somchat'},
    {id:3, name: 'Somchal'}
] 
console.log(student.length)//3
console.log(student[0])//{id:1, name: 'Somchai'}
console.log(student[student.length-1]) //ตัวสุดท้าย
console.log(student[0][1])


//3.element are array data types
const studentIds = [
  [1001, 1002, 1005],
  [645001, 6450019],
  [634102, 635111],
  [123]
]
console.log(studentIds.length) //4
console.log(studentIds[1]) // [645001, 6450019]
console.log(studentIds[studentIds.length - 1]) // [123]
console.log(studentIds[0][1]) // [1002]