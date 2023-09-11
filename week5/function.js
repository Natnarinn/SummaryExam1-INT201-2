//1.function declaration
function concat(str1, str2) {
    return str1 + str2
  }
  //calling function, execute function
  console.log(concat('hello', 'world')) //helloworld
  

//2. function expression นิพจน์เป็นฟังก์ชัน
  const toLower = function (str) {
    return str.toLowerCase()
  }
//calling function, execute function
  console.log(toLower('HELLOWORLD'))
  
  const doSomething = toLower //เอาชื่อฟังก์ชั้นtolower ให้ doSomething
  console.log(doSomething('HI')) //'hi'
  console.log(typeof doSomething) //function
  const y = toLower('Hey') //'hey'
  console.log(y) //'hey'
  console.log(typeof y) //string
  
  const doIt = function (op, str1, str2) {
    //parameter passing
    //op=concat, str1='good', str2='morning'
    return op(str1, str2)
  }
  
  console.log(doIt(concat, 'good', 'morning')) //goodmorning
  console.log(doIt(toLower, 'GOOD', 'MORNING')) //good // ใน tolower เทียบกันคือส่งพารามิเตอร์เกิน ก็ทิ้งไปเลยไม่สนใจ
  
  function a() {
    return toLower
  }
  const m = a()
  console.log(m('ABC'))