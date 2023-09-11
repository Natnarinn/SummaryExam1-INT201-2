const numbers = [1, 2, 3, 4, 5];

const index = numbers.indexOf(3); // หาตำแหน่งของค่า 3

console.log(index); // ผลลัพธ์: 2 (เนื่องจากค่า 3 อยู่ที่ index 2)


const text = "Hello, world";

const index2 = text.indexOf("world"); // หาตำแหน่งของคำว่า "world"

console.log(index2); // ผลลัพธ์: 7 (เนื่องจาก "world" อยู่ที่ index 7)



const fruits = ["apple", "banana", "orange"];

const index3 = fruits.indexOf("grape"); // ค้นหา "grape" ที่ไม่มีในอาร์เรย์

console.log(index3); // ผลลัพธ์: -1 (ไม่พบ "grape" ในอาร์เรย์)

