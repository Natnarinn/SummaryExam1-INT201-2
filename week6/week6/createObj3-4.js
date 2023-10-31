//การสร้าง object
// 3. create object by using Class (kw:constructor)
//javaScript is a prototype based, not class based in java
//Syntax sugar
//เรียกใช้ method ได้เลย
class Circle {
    constructor(r) {
        this.radius = r
    }
    //Shared method among circle objects
    area(){
      return Math.PI*Math.pow(this.radius, 2) //พายrกำลังสอง
    }
    getRadius() {
        return this.radius
    }
}
function Person(id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
  }
  
//ยืมไปใช้ p1 ของ ข้อ4
const p1 = new Person(1001, 'Adam', 'Jo')

//สร้าง object ด้วย new
const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1)
console.log(c2)
console.log(c3)

//ทุกอันสามารถเรียกใช้ method ได้
console.log(c1.area())
console.log(c2.area())
console.log(c3.area())

console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())

//Object prototype <-- Circle prototype <-- c1 (c1ถูกสร้างมาจาก Circle prototype ซึ่งอยู่ใน object prototype)
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))
console.log(Object.prototype.isPrototypeOf(c2)) //same
console.log(Object.prototype.isPrototypeOf(c3)) //same

/////////////////////////////////////////////////////////////////

//4. create object with Object.create() function (ใช้ Object.create())
//มีประโยชน์เมื่อต้องการ copy object จากอันที่เคยมีแล้ว
// const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1) //ใช้ Object.create() ในการสร้าง
//อ้างโครงและแต่ละvalueได้หมด (ไม่มีค่าของตัวเองแต่มีค่าที่copyมา)
console.log(pp1) 
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)

//ตัวที่copyมามีโครงสร้างเหมือนกันในprototype
console.log(Object.prototype.isPrototypeOf(pp1)) // true
console.log(Person.prototype.isPrototypeOf(pp1)) // true

pp1.hobbies = ['reading', 'shopping'] //เพิ่มค่าของตัวเองให้ pp1
console.log(pp1) //เวลาเรียกตัวนี้ จะแสดงแค่ properties ที่เป็นของตัวเอง (owner properties)
console.log(Object.keys(pp1)) //เรียก key ของตัวเอง
console.log(Object.values(pp1)) //เรียก value ของตัวเอง
console.log(Object.entries(pp1)) //เรียก key,value ของตัวเอง
//ถ้าจะเรียกของ parents ต้องกลับไปอ้งถึง properties เอา
