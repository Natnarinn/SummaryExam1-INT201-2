const x = [1,3,5]
const y = [2,4,6,8,10,2]

//destructing array = แยกค่ามาเก็บในตัวแปรที่มีอิสระจากกัน
const [a] = x
const [m,n,...o] = y //rest ใช้ได้ครั้งเดียวและอยู่ตัวสุดท้าย
console.log(a) //1
console.log(m) //2
console.log(n) //4
console.log(o) //[6,8,10,12]

//... in front of x is a spread operator
const z = [...x, 2, 4, ...x]
console.log(z) // [1, 3, 5, 2, 4, 1, 3, 5]

//destructuring with skip element
const [, e] = x
console.log(e) //3
//const y = [2, 4, 6, 8, 10, 12]
const [k, , l, , ...h] = y
console.log(k) //2
console.log(l) //6
console.log(h) //[10,12]

