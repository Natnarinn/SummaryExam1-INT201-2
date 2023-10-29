const studentScores = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "DAVID", score: 79 },
    { name: "Charlie", score: 68 },
    { name: "David", score: 55 },
    { name: "Eve", score: 78 },
    { name: "david", score: 85 }
  ]

const found = studentScores.find(studentScores => studentScores.name.toUpperCase() == 'DAVID' && studentScores.score > 80)
console.log(found)

const found2 = studentScores.find(studentScores => studentScores.name.toUpperCase() == 'DAVID' && studentScores.score > 80)
console.log(found2)

//list all 
const foundIndex = studentScores.findIndex(
    (student) => student.name.toLowerCase() === 'eve'
  )
  console.log(foundIndex) //5

