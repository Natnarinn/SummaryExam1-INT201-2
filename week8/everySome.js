const fruits = ["apple", "mango", "orange", "pineapple"];
//return boolean to check whether all fruits start with vowel characters

//ตวย ทำไม่เป็น
// const vowel = [a, e, i, o, u];
// const isStartVowel = check => fruits.startWith() == vowel.element;
// console.log(`vowel.every(isStartVowel)`);

//1
console.log(fruits.every(fruit => {
    console.log(fruit[0]);
    return ['a','e','i','o','u'].includes(fruit[0].toLowerCase())
}))

//2
// let check = ignoreFruits.every(
//     (n) =>
//       n.toLowerCase().startsWith('a') ||
//       n.toLowerCase().startsWith('e') ||
//       n.toLowerCase().startsWith('i') ||
//       n.toLowerCase().startsWith('o') ||
//       n.toLowerCase().startsWith('u')
//   )

//3
const isStartWithVowel = fruits.every((fruit) => {
  for (vowel of ['a', 'e', 'i', 'o', 'u']) {
    if (fruit.toLowerCase().startsWith(vowel)) {
      return true
    }
  }
  return false
})

console.log(isStartWithVowel)