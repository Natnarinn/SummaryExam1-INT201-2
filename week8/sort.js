//การใช้ sort เรียงตาม ASCII code

const animals2 = ['ant', 'dogs', 'cats', 'Bird', 'Birds']
animals2.sort()
console.log(animals2) // [ 'Bird', 'Birds', 'ant', 'cats', 'dogs' ]

const nums1 = [5, 1, 10, 1000, 2, 3, 50]
nums1.sort()
console.log(nums1) // เรียงตาม asscii
//  [
//     1, 10, 1000,
//     2,  3,    5,
//    50
//  ]

//โจทย์ที่ให้ทำเรียงตามตัวเลข
nums1.sort((a,b) => a-b) 
console.log(nums1)
// [
//     1,  2,  3,
//     5, 10, 50,
//  1000
// ]

const persons = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
  ]
  //return sorted array by fullname (ascending order and ignore case)
  //[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },