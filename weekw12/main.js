//การค้นหา node ใดๆ ใน TREE เพื่อจะเอา node นั้นไปทำงาน CRUD

//1.) select node with its id (กรณีที่มีidมาให้) จะหาจาก id ได้ เพราะมัน unige
//return แค่ node แรกที่มีตามที่ระบุ (เป็น case sensitive)
const ulStudent1 = document.getElementById('students') //tagname คือชื่อ element
//document object จะหาทั้ง document
console.log(ulStudent1)

//////////////////////////////////////
//2.) select the first node with css selector
//return first element
const ulStudent2 = document.querySelector('#students') //ต้องใช้ syntax ของ css selector Ex. Id=#,class=.
//document ในที่นี้ จะหาตาม(ที่กำหนด) parent node object
console.log(ulStudent2)

//2.1) หา ทุก node ที่มี class "programming"
const programingLect = document.querySelector('.programming') //querySelector ขึ้นต้นด้วยตัวเลขไม่ได้ ไม่ควรใส่ selector มากกว่าหนึ่งใน querySelector มันจะงง
const programingLect2 = document.querySelector('.programming, #std-std-655000888')
console.log(programingLect)
console.log(programingLect2)

//2.2) หา ul ที่มี id = students (first element)
const ulStudents3 = document.querySelector('ul[id="students"]') //tag with attribute selector
console.log(ulStudents3)

//2.3) หา ul (first element)
const ulEle = document.querySelector('ul') //tag name
console.log(ulEle)

//2.4) หา ul ที่มี parent เป็น div (first element)
const divUl = document.querySelector('div>ul')
console.log(divUl)

//////////////////////////////////////////////////
//select a collection of specified condition ได้เป็น collection
//เอาทุก element node มาเลย
//1.) หาด้วย ClassName
const programmingLect2 = document.getElementsByClassName('programming')
//return เป็น HTMLCollection data type - array-like (can use index or length, cannot use array function (forEach, filter, map,...))
console.log(programmingLect2)
console.log(programmingLect2.length)

//2.) หาด้วย TagName
const ulTagname = document.getElementsByTagName('ul')
console.log(ulTagname)
console.log(ulTagname.length)
//return HTMLCollection

/////////////////////////////////////////////////////
//ออกมาเป็น NodeList ใช้ querySelectorAll
//1.) ดึงผลลัพธ์ที่ Class = courses มาให้หมด
const coursesEle = document.querySelectorAll('.courses')
//ถ้าใช้ document นำหน้า ก็คือจะหาทั้ง document เลย
console.log(coursesEle)
//NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions

//2.) ดึงผลลัพธ์ที่ Class = courses จาก div id='bscit-courses'
const divEle = document.getElementById('bscit-courses')  //ทำให้ตัวเองอยู่ใน div id='bscit-courses'
const courseUnderDiv = divEle.querySelectorAll('.courses') //หาใน div (divEle อยู่ข้างหน้าแทน document)
console.log(courseUnderDiv)
const courseUnderDoc = document.querySelectorAll('.courses')
console.log(courseUnderDoc)

//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)
//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)

//3.)ให้อยู่ใน class = programing ทุกอัน แล้วแสดงค่าแต่ละตัวออกมา
const programingLect3 = document.querySelectorAll('.programming')
//NodeList, implement only forEach, not all array function implemented
console.log(programingLect3)
programingLect3.forEach((pl) => {
  console.log(pl)
  console.log(pl.nodeName)
  console.log(pl.nodeType)
  console.log(pl.nodeValue)
  console.log(pl.attributes) //get all attributes of element //NamedNodeMap does not implement forEach
  //ได้ออกมาเป็น NamedNodeMap ดังนั้น มันไม่ implement forEach (ต้องแปลงเป็น Arrayก่อนเอาไปใช้ใน ForEach)
  Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

//4.) ให้อยู่ใน Id = p-01 แล้วแดง Attribute ทั้งหมด
const pEle = document.getElementById('p-01')
const pEleAttributes = pEle.attributes  //สร้างตัวแปรเก็บ Attrribute ได้ค่าเป็น Collection
console.log(pEleAttributes) 
console.log(pEleAttributes.length) //ดูคววามยาวได้
Array.from(pEleAttributes).forEach((attr) => { //ต้องแปลงเป็น Array ก่อนเข้า ForEach
  console.log(attr.name) //ถอดชื่อของAttribute
  console.log(attr.value) //ถอดค่าของAttribute 
})

//มี node pE1e อยู่แล้ว ขอดูค่าไอดี Attribute ของมันหน่อย ใช้ .getAttribute (สนใจบางAttributeใช้อันนี้ได้)
console.log(pEle.getAttribute('id'))

//ใช้ getElementByTagName
const ulEle2 = document.getElementsByTagName('ul')
//return HTMLCollection -array-like, not implement forEach
const ulEleArray = Array.from(ulEle2) //เอาตัวแปรมารับให้เป็น Array
ulEleArray.forEach((ul) => console.log(ul))
 
/////////TEXT/////////////////
// const divEle2 = document.getElementById('exampleElement')
// console.log(divEle2.textContent)
// console.log(divEle2.innerText)
// console.log(divEle2.innerHTML)

/////////////////////////////////////////////////
////////////////CRUD//////////////////////
//CRUD on any element node
//1. create element, <li></li>
const newLiEle = document.createElement('li')
//2. create attribute <li class = "devops" name="devopsLect"></li>
newLiEle.setAttribute('class','devops')
newLiEle.setAttribute('name', 'devopsLect')
//3.add text value to elements,
//<li class =>


// //CRUD on any element node
// //1. create element, <li></li>
// const newLiEle = document.createElement('li')
// //2. create attribute <li class="devops name="devopsLect"></li>
// newLiEle.setAttribute('class', 'devops')
// newLiEle.setAttribute('name', 'devopsLect')
// //3. add text value to element,
// //<li class="devops name="devopsLect">Siam Yamsangsung</li>
// newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
// //4. add new li element to a parent node
// const divParent = document.querySelector('div.lecturers>ul')
// console.log(divParent)
// divParent.appendChild(newLiEle)


// //CRUD on any element node
// //1. create element, <li></li>
// const newLiEle = document.createElement('li')
// //2. create attribute <li class="devops name="devopsLect"></li>
// newLiEle.setAttribute('class', 'devops')
// newLiEle.setAttribute('name', 'devopsLect')
// //3. add text value to element,
// //<li class="devops name="devopsLect">Siam Yamsangsung</li>
// newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
// //4. add new li element to a parent node
// const divParent = document.querySelector('div.lecturers>ul')
// console.log(divParent)
// // divParent.appendChild(newLiEle)
// const liEle = document.querySelectorAll('div.lecturers>ul>li')
// console.log(liEle)
// const refNode = liEle[1]
// console.log(refNode)
// // divParent.insertBefore(newLiEle, refNode)
// // divParent.replaceChild(newLiEle, refNode)
// divParent.removeChild(refNode)

// //window.alert, window.prompt, window.confirm
// window.alert('Do you want to exit?')
// const userName = window.prompt('Please enter your name', 'ex., Somchai Jaidee')
// console.log(userName) //return user input, ok=user input, cancel=null