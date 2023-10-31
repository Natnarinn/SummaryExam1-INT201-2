function ops(n1, n2, ...n3) {
    //formal parameters
    console.log('arguments length:', arguments.length)
    for (const argu of arguments) {
      console.log(argu)
    }
    console.log('n3:', n3) //n3: [ 'xyz', 10.5, 100 ]
  }
  ops(1, true, 'xyz', 10.5, 100) //actual parameters, arguments object stores collections at actual parameters
  function sum(...nums) {
    return nums.reduce((total, current) => total + current, 0)
  }
  console.log(sum(1, 2, 3))
  console.log(sum(1, 2, 3, 4, 5))
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))