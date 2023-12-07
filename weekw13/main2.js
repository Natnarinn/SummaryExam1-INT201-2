// //////////////////preventDefault//////////////
// 
const submitButton = document.querySelector('button')
// console.log(submitButton)
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const allInputElements = document.querySelectorAll('input')
    console.log(allInputElements)

    const isComplete = Array.from(allInputElements).every(
              (input) => input.value.length > 0
            )
            const pElement = document.getElementsByTagName('p')[0]
            if (isComplete) {
              pElement.textContent = 'Your input are complete'
            } else {
              pElement.innerHTML =
                '<span style="color:red"> Missing some value, plese enter</span>'
            }
    const username = document.getElementById('input-user')
    console.log(username.value)
})


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const allInputElements = document.querySelectorAll('input')
    console.log(allInputElements)
    const isComplete = Array.from(allInputElements).every(
      (input) => input.value.length > 0
    )
    const pElement = document.getElementsByTagName('p')[0]
    if (isComplete) {
      pElement.textContent = 'Your input are complete'
    } else {
      pElement.innerHTML =
        '<span style="color:red"> Missing some value, plese enter</span>'
    }
  })
  
  
  ///////////////////////windowDocumentEvent////////////
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Your DOM tree built')
  })
  window.addEventListener('load', () => {
    console.log('Your Applciation Loaded')
  })//loadหลังDOMContentLoadedทำเสร็จ
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('myCat', 'Tom')
  })//Storage cookies ก่อน unload จะเก็บข้อมูล
//   window.addEventListener('mousemove', (e) => {
//     console.log(`x:${e.screenX}, y:${e.screenY}`)
//   })
  
  
  ///////////////////////focusBlur//////////////////
  const userElement = document.getElementById('input-user')
  const pswElement = document.getElementById('input-psw')
  userElement.addEventListener('focus', () => {
    console.log('Your focus is on username')
  })//จะขึ้นเมื่อกำลัง active
  userElement.addEventListener('blur', () => {
    console.log('Your username input textbox is blured')
  })//จะขึ้นเมื่อกำลัง inactive
  
  
  /////////////inputKeyboard/////////////////////////
  const userElement2 = document.getElementById('input-user')
  const pswElement2 = document.getElementById('input-psw')
  //using keydown and keypress only to detect number characters 0-9
  userElement2.addEventListener('keypress', (e) => { //using keydown && keypress only
    console.log(`${e.key}, ${e.code}`)
//     k, KeyK
//     l, KeyL
//     ;, Semicolon
//     [, BracketLeft
    if (e.key >= 0 && e.key <= 9) {
      e.preventDefault()
    }
  }) //ไม่ให้กรอกตัวเลข

  // when user release enter key, text value on username will show at <p> element
  userElement2.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const pElement = document.querySelector('p')
      pElement.textContent = e.target.value
    }
  }) //เมื่อไหร่ที่ enter จะแสดงค่าออกมาใช้ที่ <p>


/////////////////////EventInput//////////////////////
  userElement2.addEventListener('input', (e) => {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
  })//ในที่กรอกเป็นค่าอะไร<p> เปลี่ยนตามด้วยเสมอ