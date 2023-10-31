//Arrow function: ลดรูปฟังก์ชัน เขียนกระชับ || ใช้ arrow function อ้าง current object(this,argument,super) ไม่ได้
//Traditional function: การเขียนแบบปกติ

//Arrow function ไม่มีพารา หรือมีมากกว่าหนึ่งพารา ต้องใส่วงเล็บ || multtiple statement ต้องใส่ปีกการ || มีปีกกาเมื่อไหร่ เขียน return เอง
//วิธี: เอาfunction ออก เอาปีกกาออก

//function types: anonymous function(ไม่มีชื่อ) , named function(มีชื่อ)

//function declaration, named function (เป็นฟังกชันปกติมีชื่อเรียก)
function sum(n1, n2) {
    return n1 + n2
  }
  
//function expression, annonymous function (เป็นฟังก์ชันที่ทำหน้าที่เป็นexpression(มอบให้ตัวแปรได้) แบบไม่มีชื่อ)
  const sum2 = function (n1, n2) {
    return n1 + n2
  }
  
  //function expression, named function
  const sum3 = function sumfn(n1, n2) { //sum3 or sumfn เรียกใช้ได้
    //sumfn เรียกได้แค่ภายในสโคปตัวเอง อันนี้มันมาเป็นตัวแปรใหกับ sum3 แล้ว จึงเรียกไม่ได้แล้ว
    return sumfn(1,2)
  }
  
  //arrow function, function expression, annonymous function
  const sum4 = (n1, n2) => n1 + n2
  
  console.log(sum(1, 2))
  console.log(sum2(1, 2))
  console.log(sum3(1, 2))
  console.log(sum4(1, 2))
  
  const sum5 = (n1, n2) => {
    return n1 + n2
  }
  console.log(sum5(1, 2))