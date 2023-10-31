//การใช้ every,some

const fruits = ["apple", "mango", "orange", "pineapple"];
//return boolean to check whether all fruits start with vowel characters
console.log(fruit.every(fruit => ))

//1.) return boolean to check whether all fruits start with vowel characters
console.log(fruits.every(fruit => {
    console.log(fruit[0]); //ตัดตัวแรกของ element มา
    return ['a','e','i','o','u'].includes(fruit[0].toLowerCase())
}))