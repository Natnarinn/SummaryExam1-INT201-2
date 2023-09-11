//ceil round up
console.log(Math.ceil(1.02))
console.log(Math.ceil(1.5))
console.log(Math.ceil(1.9))

//floor round down
console.log(Math.floor(1.02))
console.log(Math.floor(1.5))
console.log(Math.floor(1.9))

// round following mathematics
console.log(Math.round(1.02))
console.log(Math.round(1.5)) // 0.5 then round up
console.log(Math.round(1.9))

//pow ยกกำลัง power
console.log(Math.pow(2,3)) //8

//sqrt ถอดรูท squareroot
console.log(Math.sqrt(9)) //3 

//pi ค่าพายในวงกลม
console.log(Math.PI)

////////////////////////////////////////////////////////////////////////////
//random
console.log(Math.random(1,2,3,4,5,6)) //ทำบ่ได้เด้อ
//random Dice faceValue in a range 1-6
let rand = Math.floor(Math.random()* 6) + 1
console.log(rand)

// 10 - 50
let rand2 = Math.floor(Math.random()* 41) + 10
console.log(rand2)

// 100 - 1000
let rand3 = Math.floor(Math.random()* 901) + 100
console.log(rand)

// min - max 
let min = 1
let max = 100
let rand4 = Math.floor(Math.random()*(max-min+1)) + min
console.log(rand4)
// //1. Math.random() -> 0 - 0.9999999*
// //2. No1. * 100 -> 0 - 99.99999999*
// //3. Math.floor(No2.) -> 0 - 99
// //4. No3.+ min -> 1 - 100


// function random
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min
}

let rand_2 = randomNumber(1,6)
let rand2_2 = randomNumber(10,50)
let rand3_2 = randomNumber(100,1000)
let rand4_2 = randomNumber(min,max)
////////////////////////////////////////////////////////////////////////////