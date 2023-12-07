//วิธีgetProperty 1.)objectname.propertykey 2.) objectname["propertykey"]
//composite object : address object is nested in st4 object
const st4 = {
  firstname: 'Pornchai',
  lastname: 'Jaidee',
  studentId: 651000103,
  address: { province: 'Bangkok', country: 'Thailand' },
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`
  }
      //สามารถยุบเป็น // getFullname () {return `${this.firstname} ${this.lastname}`} //  ได้
}
//get property 1) objectname.propertykey 2) objectname["propertykey"]
console.log(st4.firstname)
console.log(st4['lastname']) //dynamic key

console.log(st4.address.country) // สามารถเรียกตัวที่ซ้อนอยู่ได้เลยโดยใช้จุด
console.log(st4['address']['country']) //เหมือนข้างบนแต่อีกวิธี

//dynamic property: add a new one, update or delete existing property (เพิ่ม,ปรับ,ลบได้)
st4.email = 'pornchai.jai@kmutt.ac.th' //add a new property
st4.firstname = 'Pornsak' //edit property value
delete st4.email //delete a property
st4.getAddress = function () {
  //add a new property that stores function เพิ่มpropertyใหม่แบบfunction
  return this.address
}

console.log(st4)
console.log(Object.prototype.isPrototypeOf(st4)) //st4 เป็น instance protype ของ object ไหม //True
console.log(Date.prototype.isPrototypeOf(st4)) //st4 เป็น instance protype ของ date ไหม //false
console.log(st4.getFullname()) //Pornchai Jaidee
//property value can store function
//Empty Object {} ก็อยู่ใน protoype ของ object
//ถ้าแทนpropertiesชื่อซ้ำ จะแทน properties ให้เลย ยึดอันล่าสุด
