//  Single datatype Array
const fruit = ["Apple", "Papaya", "Banana", "Orange"]

//  Multiple datatype Array เก็บ datatype อะไรก็ได้
const mixedData = [1, "Goodito Fujiko", { age: 45, sex: "male" }]

// Datatype of mixedData[0] = number
// Datatype of mixedData[1] = string
// Datatype of mixedData[2] = object



const students = [
    {
        id: 1,
        name: "Goodito Fujiko",
        age: 20
    },
    {
        id: 5,
        name: "Dimitri Petrenko",
        age: 22
    },
    {
        id: 10,
        name: "Rico Rodriguez",
        age: 21
    },
    {
        id: 3,
        name: "Lena Oxton",
        age: 28
    },
    {
        id: 2,
        name: "Mary Somers",
        age: 39
    }
]


//  Array.filter() 
const filteredStudents = students.filter(
    (value, index, array) => {
        // console.log(value)
        // console.log(index)
        // console.log(array)
        return value.age < 25
    } //annonymus function
)

// console.log(filteredStudents)


//  Array.sort()
const numbers = [1,4,5,2,3,0]
// console.log(numbers) //[1,4,5,2,3,0]
numbers.sort(
    (a,b) => {
        return a - b
    }
)
// console.log(numbers) //[0,1,2,3,4,5] ถ้าเกิดขึ้นแล้วข้อมูลจะเปลี่ยนเลย



//  Array.splice
//              0       1                   2               3
const food = ["Ramen","Omlete", "Tom Yam Shrimp", "Kra Phow Crispy Pork"]

// Array.splice(<ตำแหน่ง index เริ่มต้น>,<จำนวน index ที่จะลบ>,<Element ที่จะใส่เข้าไป>)
//  ต้องการที่จะใส่ "Pad Tai" เข้าไปใน Array
food.splice(3,1,"Pad Tai") //index 3 หาย 1 ตัว pad tai เข้าไปแทนที่ Kra Phow Crispy Pork (index 3)
console.log(food)



//  ถ้าอยากลบ Ramen โดยใช้ indexOf ล่ะ?
let selectedIndex = food.indexOf("Ramen") //ในวงเล็บคือสิ่งที่ต้องการค้นหา ยืดหยุ่นกว่า เปลี่ยนที่ ramen ได้
console.log(selectedIndex)
food.splice(selectedIndex,1,"Pai Tai")
console.log(food)


//  กรอง students ที่มีอายุน้อยกว่า 25 ปี
const selectedStudents = students.filter(
    (element,index,array) => {
        return element.age<25
    }
)
    // element : each element of the array
    // index : index of selected element
    // array : source of element
console.log(selectedStudents)





//  เรียงข้อมูลใน students ตาม id
students.sort(
    (studentA,studentB) => {
        // return integer required
        // If integer is negative (-), means A less than B
        // If integer is 0, means A equals B
        // If integer is positive (+), means A more than B
        return studentA.id - studentB.id
    }
    // studentA : first value to compare
    // studentB : second value to compare

)
console.log(students)



// const arr = [0,1,2,3,4,5]
// arr.splice(5,2)          // delete index 5,6
// console.log(arr)         // result [ 0, 1, 2, 3, 4 ]