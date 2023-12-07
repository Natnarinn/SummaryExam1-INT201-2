/////////////////////////////////eventPropagation///////////////////////////////

//1. select target HTML object (เลือกเป้าหมาย Element จะกดที่ไหน)
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object (เลือกว่าจะจัดการยังไงกับ event นั้นๆ)
const doSomething = (e) => { //e เป็นparameter ไปรับ event object มาทำงาน
    // console.log('submit button is clicked')
    // console.log(e)
    console.log(e.target.id) //แสดงไอดี
    // console.log(e.target.nodeName) //แสดงชื่อ
    // console.log(e.type)
    // console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
} //เอาตัวแปรมาเก็บค่าfunction เพื่อเวลาเอาไปใช้สามารถใช้ได้หลายที่
submitButton.addEventListener("click", doSomething) //("Event types", พอกดแล้วให้ทำอะไร)

// /////////////////////////////eventPropagation-2//////////////
// -----------------------
// inner-div
const innerDiv = document.getElementById('inner-div')
// console.log(innerDiv)
innerDiv.addEventListener('click', (event) => {
  console.log(event.target.id)
  console.log(event.currentTarget)
  console.log(event.eventPhase)
})

//outer-div
const outerDiv = document.getElementById('outer-div')
// console.log(outerDiv)
outerDiv.addEventListener('click', (event) => {
  console.log(event.target.id)
  console.log(event.currentTarget)
  console.log(event.eventPhase)
})

/////////////add multipleHandler function/////////////
//1. select target HTML object (เลือกเป้าหมาย Element จะกดที่ไหน)
// 2 register handler function on a target HtML object (เลือกว่าจะจัดการยังไงกับ event นั้นๆ)
//add multiple handler funcyion on the same event type and html object
submitButton.addEventListener('click', (e) => {
    console.log(`hello, ${e.target.id}`)
}) //1
submitButton.addEventListener('click', (e) => {
    console.log(`Good bye, ${e.target.id}`)
}) //2
//addอันไหนก่อนก็ขึ้นอันนั้นก่อน = add หลายตัวได้


// //////////////////remove multiplHandlerf//////////////

//1. select target HTML object
// 2 register handler function on a target HtML object
const doSomething2 = (e) => {
  console.log(`Good bye, ${e.target.id}`)
}
submitButton.addEventListener('click', (e) => {
  console.log(`hello, ${e.target.id}`)
})

//add multiple handler functions on the same event type and HTML object
submitButton.addEventListener('click', doSomething2)
//remove event listener
submitButton.removeEventListener('click', doSomething2)



