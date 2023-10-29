// 3. create object by using Class
//javaScript is a prototype based, not class based
class Circle {
    constructor(r) {
        this.radius = r
    }
    //Shared method among circle objects
    area(){
      return Math.PI*Math.pow(this.radius, 2)
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
  
const p1 = new Person(1001, 'Adam', 'Jo')
const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1)
console.log(c2)
console.log(c3)

console.log(c1.area())
console.log(c2.area())
console.log(c3.area())

console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())

console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))
console.log(Object.prototype.isPrototypeOf(c2))
console.log(Object.prototype.isPrototypeOf(c3))


//4. create object with Object.create() function
// const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1)) // true
console.log(Person.prototype.isPrototypeOf(pp1)) // true
pp1.hobbies = ['reading', 'shopping']
console.log(pp1)
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))
