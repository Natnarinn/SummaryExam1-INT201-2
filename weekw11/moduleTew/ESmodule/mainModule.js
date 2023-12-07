import total, { MAX_VALUE } from './libs/utill.js' //ทำการเรียก echo มาใช้ โดยอ้าง relative path จาก main.js เข้าไป
// import total from './libs/utill.js' //default export เปลี่ยนชื่อได้เลย
// console.log(echo('Practice makes perfect')) //error เพราะไม่ได้ให้ export
console.log(total(1, 5, 4))
console.log(MAX_VALUE)
