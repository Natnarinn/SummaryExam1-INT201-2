//check cookiess ปัจจุบัน
// const currentCokkies = document.cookies
// console.log(currentCokkies)

// import { CookieUtil } from "./libs/cookieUtil.js"
// document.cookie = 'username=Warisa' //='name=value'
// document.cookie = 'course=INT201' 
// document.cookie = 'credit=3'
// document.cookie = 'credit=2' //ถ้าชื่อซ้ำจะแทนที่ค่า่าสุดให้
// const currentCokkies = document.cookie
// console.log(currentCokkies)
// console.log(CookieUtil.get('course')) //ให้แสดงค่าCookies โดยระบุเป็นชื่อ course //INT201

import { CookieUtil } from "./libs/cookieUtil.js";
//new Date(year, monthIndex, day)

CookieUtil.set("username", "Warisa", new Date(2023, 11, 31))
CookieUtil.set("course", "INT202", undefined)
CookieUtil.set("credit", "2", new Date(2024, 1, 1))
console.log(CookieUtil.get("username"))
console.log(CookieUtil.get("course"))
console.log(CookieUtil.get("credit"))


//////////////////Web storage////////////////////
//local storage: อยู่ถาวร จนกว่าจะสั่งลบ
let count = localStorage.getItem('counter')
if(count===null){
    count = 1
    localStorage.setItem('counter',count)
} else {
    localStorage.setItem('counter', ++count)
}
alert(`count=${count}`)

//session: ใช้ครั้งเดียว เปิดtab,browserใหม่ก็หาย
let count2 = sessionStorage.getItem('counter')
if(count2===null){
    count2 = 1
    sessionStorage.setItem('counter',count2)
} else {
    sessionStorage.setItem('counter', ++count2)
}
alert(`count2=${count2}`)


// let count3 = sessionStorage.getItem("counter")
// if (count3 === null) sessionStorage.setItem("counter", 1)
// else sessionStorage.setItem("counter", ++count3)
// alert(sessionStorage.getItem("counter"))
// sessionStorage.setItem("color", "green")

sessionStorage.removeItem("counter") //remove sessionStorage
sessionStorage.clear() //remove all sessionStorage

// const submitColor = document.getElementById("submitColor")
// const colorInput = document.getElementById("colorInput")


window.addEventListener('load', () => {
    document.body.style = `background-color:${localStorage.getItem('yourColor')}`
  })
  const colorInput = document.getElementById('color-input')
  colorInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    document.body.style = `background-color:${e.target.value}`
    localStorage.setItem('yourColor', e.target.value)
  })


