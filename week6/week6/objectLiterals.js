//การสร้าง object
//1. create object with object literals (ปีกกา)

const st1 = { studentId: 651000101, firstname: 'Somchai', lastname: 'Sookjai' }
console.log(typeof st1)//ดูว่ามีค่าtypeอะไร
console.log(st1)//แสดงตัวแปรstr1
const st2 = {} //empty object 
console.log(typeof st2)
 
console.log(Object.keys(st1)) //array of property key ได้collectionของkey
console.log(Object.values(st1)) //array of property value ได้collectionของvalue
 
//ข้อเสียการสร้าง literals คือถ้าสร้างobject ใหม่ โครงสร้างเดิมก็ต้องcopy code มาวาง ไม่สามารถอ้างร่วมได้
// propertiesอยู่ไหนก็ไม่มีผล (unorder)
const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 }
console.log(st3)
 
//composite object : address object is nested in st4 object
const st4 = {
  firstname: 'Pornchai',
  lastname: 'Jaidee',
  studentId: 651000103,
  address: { province: 'Bangkok', country: 'Thailand' },//composite object จะซ้อนกี่ชั้นก็ได้
  getFullname: function () {
    return `${this.firstname} ${this.lastname}` //(``)เป็นการรวมข้อความ (this reference)
  }
}
console.log(st4)
console.log(st4.getFullname()) //ถ้าค่าเป็นfunction ต้องเรียกแบบfunction // Pornchai Jaidee

//property value can store function
const st5 = {
  firstname: 'Porntip',
  lastname: 'Dee',
  studentId: 651000105,
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`//repeat code
  }
}
console.log(st5.getFullname()) //Porntip Dee เรียกของอันไหนก็เอา getfullname ของอันนั้น

//แบบliterals ไม่สร้าง prototype ใหม่