const animals = ['ant', 'dogs', 'cats', 'bird'] //ats false, cats true
const message = 'Practices make perfect' //ake true
//string includes - includes substring (case sensitive)

// string includes ดู string ที่มีอยู่ไม่ได้ check เป็นคำ
console.log(message.includes('ics')) //true
console.log(message.includes('make')) //true

// array includes ต้อง includes ทั้ง elemeant ใน array
console.log(animals.includes('ats')) // false
console.log(animals.includes('cats')) //true
