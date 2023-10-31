function getFirstName({ displayName, fullName: { firstName: fn } }) {//เปลี่ยนชื่อ param เป็น fn
    return `${displayName} is ${fn}`
  }
  const students = {
    studentId: 64001,
    displayName: 'jsGuy',
    fullName: {
      firstName: 'Somchai',
      lastName: 'DeeJai'
    }
  }
  console.log(getFirstName(students))