//การกำหนดและใช้ default parameter
function ops(n1 = 'F', n2 = 'false', n3 = 'unknown') {
    return { n1, n2, n3 }
  }
  console.log(ops()) //{ n1: 'F', n2: 'false', n3: 'unknown' }
  console.log(ops('A')) //{ n1: 'A', n2: 'false', n3: 'unknown' }
  console.log(ops('A', true)) //{ n1: 'A', n2: true, n3: 'unknown' }
  console.log(ops('A', true, 'Somchai')) //{ n1: 'A', n2: true, n3: 'Somchai' }

  console.log(ops(undefined, undefined, undefined)) //{ n1: 'F', n2: 'false', n3: 'unknown' } (ได้ค่าdefult)

  console.log(ops(null, null, null)) //{ n1: null, n2: null, n3: null } (ได้ null หมด)

  //ไม่ส่งค่าที่สอง ให้ใส่ undefined
  console.log(ops('A', undefined, 'Somchai')) //{ n1: 'A', n2: 'false', n3: 'Somchai' }