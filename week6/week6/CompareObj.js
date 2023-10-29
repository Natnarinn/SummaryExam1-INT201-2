// วิธี1: === or == compare reference address
const st1 = {
  studentId: 651000101,
  firstname: 'Somchai',
  lastname: 'Sookjai',
  studentId: 1
}

const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 }
const st4 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 }
const st2 =st1
console.log(st1 === st3) //false
console.log(st1 === st2)//true
console.log(st3 === st4)//false

//วิธี2: Manual compare function to compare two students
function compareStudent(st1,st2) {
    return st1.studentId === st2.studentId
}
console.log(compareStudent(st1,st2)) //true
console.log(compareStudent(st3,st4)) //true
console.log(compareStudent(st1,st3)) //false


