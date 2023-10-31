//Spread ... operator obj.
const obj1 = {id:1, name:'Garfair'}
const obj2 = {...obj1} //spreadOperator = copy แค่ Content มา แต่โครงสร้างไม่เหมือนกัน

console.log(obj1)
console.log(obj2)
console.log(obj1 === obj2) //false

//ถ้า merge obj. โดยใช้ spread แล้วมี propoties ซ้ำ มันจะใช้แค่ตัว ตัวท้าย
