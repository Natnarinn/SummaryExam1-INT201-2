//การใช้ find,findIndex
const studentScores = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "DAVID", score: 79 },
    { name: "Charlie", score: 68 },
    { name: "David", score: 55 },
    { name: "Eve", score: 78 },
    { name: "david", score: 85 }
  ]

  //หา david คนแรกใน array ไม่สนใจ case sensitive และมี score มากกว่า 80
const found = studentScores.find((studentScores) => studentScores.name.toLowerCase() == 'david' && studentScores.score > 80)
console.log(found)

const found2 = studentScores.find(studentScores => studentScores.name.toUpperCase() == 'DAVID' && studentScores.score > 80)
console.log(found2)

  //หา david ทุกคนใน array ไม่สนใจ case sensitive และมี score มากกว่า 80
//list all ใช้filter
const found3 = studentScores.filter((studentScores) => studentScores.name.toLowerCase() == 'david' && studentScores.score > 60)
console.log(found3)

//หาว่ามีไหม 
const foundIndex = studentScores.findIndex(
    (student) => student.name.toLowerCase() === 'nut'
  )
  console.log(foundIndex) //-1 (ค่า-1 คือไม่มีอยู่ใน array)


