function getPassingNames(students) {
  const filterStudents = students.filter((student) => student.score >= 70)
  //[  { name: 'Alice', score: 85 },
  //  { name: 'Bob', score: 92 },
  // { name: 'Eve', score: 78 }  ]
  const studentNames = filterStudents.map(
    (filterStudent) => filterStudent.name.toUpperCase() //[ 'ALICE', 'BOB', 'EVE' ]
  )
  return studentNames
}