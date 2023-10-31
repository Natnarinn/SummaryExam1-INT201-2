function ops(n1, n2, n3) {//formal parameter
    //arguments[0]=n1, arguments[1]=n2, arguments[2]=n3
    console.log(arguments.length) //3 (มันจะไปCheck actual parameter)
    arguments[0] = 555 //ถ้าแก้ไขด้วย arguments จะแก้ไขอีกทีนึงด้วย
    console.log(n1)
    for (const argu of arguments) {
      console.log(argu) //1, true, 'xyz
    }
  }
  ops(1, true, 'xyz')
  ops(1,false) //ส่ง2para ไม่ error ตัวสุดท้ายจะundefined
  ops(1,false, 'rty', 10.5) //actual parameter