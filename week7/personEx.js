// Exercise: ให้ทำ firstname,lastname,dateOfBirth,constructor,getFullName(),getAge(),isEqual(anotherPerson),toString()

class Person {
  //constructor
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
  }

  //////////////////////////////////////////////////////////////////
  getFullName() {
    //return string in the format 'lastName, firstName'
    return `${this.lastName}, ${this.firstName}`
  }

  /////////////////////////////////////////////////////////////////
  // compares this firstName and lastName to the specified another person object. Returns false if the fullName  are different and true, if it is the same (case insensitive)
  isEqual(anotherPerson) {
    return (
      this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
      this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
    )
  } //check case sensitive

  ///////////////////////////////////////////////////////////////////
  //return age by calculating from dateOfBirth
  //การหาอายุ
  //Date.now(): คืนเป็น millisecond
  //getTime(): เวลาที่เรียก
  //getFullYear(): เอาmillisecond มาทำเป็น ค.ศ.(4หลัก)
  getAge() {
    //returns the number of milliseconds
    const currentDateMilli = Date.now() //เวลาตอนนี้
    const birthDateMilli = this.dateOfBirth.getTime() //เวลาตอนเกิด
    const diffMilli = currentDateMilli - birthDateMilli //ค่าที่แตกต่าง ในรูป milliSecond
    console.log(currentDateMilli, birthDateMilli, diffMilli)
    const diffDate = new Date(diffMilli) //ไม่มีความหมายทำให้เป็น Date เฉยๆ

    return diffDate.getFullYear() - 1970 //ลบด้วย1970 ซึ่งเป็น ฐานในการคิด
  }

  ///////////////////////////////////////////////////////////////////
  //return  a string representing fullName and age
  toString() {
    return `${this.getFullName()}, ${this.getAge()}`
  }
}

//////////////////////////////////////////////////////////////////
const p1 = new Person('Umaporn', 'Sup', new Date(1980, 7, 30))
const p2 = new Person('somchai', 'Sup', new Date(1985, 1, 10))
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p2.isEqual(p1)) //false เช็ค firstname and lastname ว่าเหมือนกันไหม (ในวงเล็บส่งไปเป็นparameter)
console.log(p1.isEqual(p1))

console.log(p1.toString())
console.log(p1.getAge())
