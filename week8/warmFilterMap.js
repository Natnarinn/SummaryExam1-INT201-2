// function getPassingNames(students) {
//   return students 
//     .filter((student) => student.score >= 70)
//     .map((filterStudent) => filterStudent.name.toUpperCase());
// }

function getPassingNamess(studentsScores) {
  const filterStudent = studentScores.filter((studentScores) => studentScores.score >= 70)
  const mapStudent = filterStudent.map((filterStudent) => filterStudent.name.toUpperCase())
  return mapStudent
}

// Example usage:
const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 }
];
const passingNames = getPassingNamess(studentScores);
console.log(passingNames);
// Output should be: ["ALICE", "BOB", "EVE"]
