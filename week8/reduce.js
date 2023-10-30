//การใช้ reduce
const fruits = ["apple", "mango", "orange", "pineapple"]
//concat first character
// fruits.reduce(firstChars, fruit) => firstChars.concat(fruits).concat(fruits.CharAt(0))

//ผลคูณ
const nums = [1, 2, 3, 4, 5] //1*2*3*4*5
const mulResult = nums.reduce((mul, num) => mul * num) //mulคือค่าสุดท้ายที่ return
console.log(mulResult)

//ผลรวม
const sellProducts = [
    {id: 1 , price: 100 , sell: 5},
    {id: 2 , price: 50, sell: 2},
    {id: 3, price: 25, sell: 10}
]

const sumSell = sellProducts.reduce((total, product) => total + (product.price * product.sell), 0)//0  คือตั้งค่า intitial value
console.log(sumSell)