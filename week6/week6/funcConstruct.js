//Constructor function
function Person(id, fn, ln) {
  this.id = id
  this.firstname = fn
  this.lastname = ln
}

//2. Create object by using constructor function
const p1 = new Person(1001, 'Adam', 'Jo')
const p2 = new Person(1002, 'Aree', 'Jun')
const p3 = new Person(1003, 'Akom', 'Jay')
console.log(p1)
console.log(p2)
console.log(p3)

p1.email = 'adam@gmail.com' //เพิ่ม p1 --> p2,p3 ไม่เปลี่ยนตาม
//Object prototype <-- Person prototype <-- p1
console.log(p1)
console.log(p2)
console.log(p3)

