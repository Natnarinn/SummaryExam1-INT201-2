//การสร้าง object
//2. Create object by using constructor function (มีthis)

//ตามธรรมเนียมใช้ชื่อfunction ตัวใหญ่เหมือนชื่อ class ไม่ต้องใช้ camel
function Person(id, fn, ln) {
  this.id = id
  this.firstname = fn
  this.lastname = ln
}

//ไม่ต้อง repeat code
const p1 = new Person(1001, 'Adam', 'Jo')
const p2 = new Person(1002, 'Aree', 'Jun')
const p3 = new Person(1003, 'Akom', 'Jay')
console.log(p1)
console.log(p2)
console.log(p3)

p1.email = 'adam@gmail.com' //เพิ่ม p1 --> p2,p3 ไม่เปลี่ยนตาม
console.log(p1)
console.log(p2)
console.log(p3)

//Object prototype <-- Person prototype <-- p1 (p1ถูกสร้างมาจากPerson prototype ซึ่งอยู่ใน object prototype)
//p1 เป็น instance person และเป็น instance object ด้วย
//Constructor function จะสร้าง prototype ใหม่ (Person prototype)
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Date.prototype.isPrototypeOf(p1))

