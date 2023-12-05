//select node with its id (กรณีที่มีidมาให้)
const ulStudent = document.getElementById('students') //tagname คือชื่อ element
//document object จะหาทั้ง document
console.log(ulStudent)

//select the first node with css selector
const ulStudent2 = document.querySelector('#students') //return first element
//document ในที่นี้ จะหาตาม(ที่กำหนด) parent node object
console.log(ulStudent2)

const programingLect = document.querySelector(
  '#std-655000888',
  '.programming',
  '#int101'
) //querySelector ขึ้นต้นด้วยตัวเลขไม่ได้ ไม่ควรใส่ selector มากกว่าหนึ่งใน querySelector มันจะงง
console.log(programingLect)

const programmingLect2 = document.querySelector('.programming') //class selector
console.log(programmingLect2)
const ulStudents3 = document.querySelector('ul[id="students"]') //tag with attribute selector
console.log(ulStudents3)
const ulEle = document.querySelector('ul') //tag name
console.log(ulEle)
const divUl = document.querySelector('div>ul')
console.log(divUl)

//select a collection of specified condition
const programmingLect3 = document.getElementsByClassName('programming')
//return HTMLCollection data type - array-like (can use index or length, cannot use array function (forEach, filter, map,...))
console.log(programmingLect3)
console.log(programmingLect3.length)
const ulTagname = document.getElementsByTagName('ul')
console.log(ulTagname)
console.log(ulTagname.length)
//return HTMLCollection
const coursesEle = document.querySelectorAll('.courses')
console.log(coursesEle)
//NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions
const divEle = document.getElementById('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll('.courses')
console.log(courseUnderDiv)
const courseUnderDoc = document.querySelectorAll('.courses')
console.log(courseUnderDoc)

//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)
//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)


const programmingLect = document.querySelectorAll('.programming')
//NodeList, implement only forEach, not all array function implemented
console.log(programmingLect)
programmingLect.forEach((pl) => {
  console.log(pl)
  console.log(pl.nodeName)
  console.log(pl.nodeType)
  console.log(pl.nodeValue)
  console.log(pl.attributes) //get all attributes of element //NamedNodeMap does not implement forEach
  Array.from(pl.attributes).forEach((attr) => console.log(attr))
})
const pEle = document.getElementById('p-01')
const pEleAttributes = pEle.attributes
console.log(pEleAttributes)
console.log(pEleAttributes.length)
Array.from(pEleAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(pEle.getAttribute('id'))
const ulEle2 = document.getElementsByTagName('ul')
//return HTMLCollection -array-like, not implement forEach
const ulEleArray = Array.from(ulEle2)
ulEleArray.forEach((ul) => console.log(ul))
 
// //CRUD on any element node
// //1. create element, <li></li>
// const newLiEle = document.createElement('li')
// //2. create attribute <li class = "devops" name="devopsLect"></li>
// newLiEle.setAttribute('class','devops')
// newLiEle.setAttribute('name', 'devopsLect')
// //3.add text value to elements,
// //<li class =>


//CRUD on any element node
//1. create element, <li></li>
const newLiEle = document.createElement('li')
//2. create attribute <li class="devops name="devopsLect"></li>
newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')
//3. add text value to element,
//<li class="devops name="devopsLect">Siam Yamsangsung</li>
newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
divParent.appendChild(newLiEle)


//CRUD on any element node
//1. create element, <li></li>
const newLiEle = document.createElement('li')
//2. create attribute <li class="devops name="devopsLect"></li>
newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')
//3. add text value to element,
//<li class="devops name="devopsLect">Siam Yamsangsung</li>
newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
// divParent.appendChild(newLiEle)
const liEle = document.querySelectorAll('div.lecturers>ul>li')
console.log(liEle)
const refNode = liEle[1]
console.log(refNode)
// divParent.insertBefore(newLiEle, refNode)
// divParent.replaceChild(newLiEle, refNode)
divParent.removeChild(refNode)

//window.alert, window.prompt, window.confirm
window.alert('Do you want to exit?')
const userName = window.prompt('Please enter your name', 'ex., Somchai Jaidee')
console.log(userName) //return user input, ok=user input, cancel=null