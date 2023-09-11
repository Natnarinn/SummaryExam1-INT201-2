//nulish Coalescing

let arr
arr = arr ?? [1,2,3]
console.log(arr) //ได้ array เพราะ arr เป็น Undefined

let arr1 = [] //empty String
arr1 = arr1 ?? [1,2,3]
console.log(arr1)

let nums 
let aee
aee = nums ?? []
console.log(nums) // nums ได้ค่า undefind
console.log(aee) // ทำให้ aee มีค่าของ nums จึง ได้ค่าหลัง ??