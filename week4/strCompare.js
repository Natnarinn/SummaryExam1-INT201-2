let str1 = 'apple'
let str2 = 'Apple'
let str3 = 'APPLE'
let str4 = 'apple'
console.log(str1 === str2) //checkทีละตัวอักษรไปเรื่อยๆ 'a' === 'A' return false
console.log(str1 !== str2) //'a' !== 'A' return true
console.log(str1 === str4) //check ทุกตัวแล้วเท่า return true
console.log(str1>str2)//เปรียบเทียมจาก ASCII BINARY CODE
console.log(str1.includes('App')) //str1 ไม่ App เป็น app เลยไม่ include
console.log(str2.includes('App'))

//charAt() = เอาตัวอักษรตาม index ที่ระบุ
//concat() = เชื่อม
//endsWith() = หาตัวลงท้ายเหมือนกัน
//indexOf = อักษรที่ต้องการหารอยู่ตำแหน่ง Index เท่าไหร่ของ String นั้น
//startWith() = หาตัวขึ้นต้นเหมือนกัน
//SubString() = ตัดบางส่วนของ String ออกมาตาม index ที่ระบุ
//trim() = ตัดspaceหน้าหลัง

//include
//toLower/toUpper //use for includes with insensitive
console.log(str1.toLowerCase().includes('App'.toLowerCase()))
console.log(str1.toUpperCase().includes('APP'.toUpperCase()))
// === vs includes() (case sensitive)
//'apple'.toLowerCase() ==='Apple'.toLowerCase() return true
//'app'==='apple' return false

//'apple'.includes('apple') return true
//'apple'.includes('app') return true

