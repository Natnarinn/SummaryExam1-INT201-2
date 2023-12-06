///////TEXT/////////////////
const divEle2 = document.getElementById('exampleElement')
console.log(divEle2.textContent) //This is some hidden text content.
console.log(divEle2.innerText) //This is some text content.
console.log(divEle2.innerHTML) //This is some <span style="display:none">hidden</span> text content.

/////////////////////////////////////////////////
////////////////CRUD//////////////////////
//CRUD on any element node
//การสร้าง node ใหม่ต้องสร้าง node, element, attribute, text + เชื่อมไปยัง DOM (เชื่อมกับParent)
//1. create element, <li></li>
const newLiEle = document.createElement('li') //createElemen li tใหม่
//2. create attribute <li class = "devops" name="devopsLect"></li> (set attribute ถ้ามีก็ทำ)
newLiEle.setAttribute('class','devops') //(ชื่อAttribue,ค่าของAttributeนั้น)
newLiEle.setAttribute('name', 'devopsLect')
//3.add text value to elements,
//<li class="devops name="devopsLect">Siam Yamsangsung</li>
newLiEle.textContent = 'Siam Yamsangsung'
// newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul') //เอาตัวแปรมาเก็บค่า node parent ก่อน
console.log(divParent)
divParent.appendChild(newLiEle) //ใช้ appendChild() ในการ add new node (เอาลูกมาต่อท้าย)


//CRUD on any element node
//1. create element, <li></li>
const newLiEle2 = document.createElement('li')
//2. create attribute <li class="devops name="devopsLect"></li>
newLiEle2.setAttribute('class', 'devops2')
newLiEle2.setAttribute('name', 'devopsLect2')
//3. add text value to element,
//<li class="devops name="devopsLect">Siam Yamsangsung</li>
newLiEle2.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
//4. add new li element to a parent node
const divParent2 = document.querySelector('div.lecturers>ul') //ต้องเอาparentมาก่อนเพื่อจะได้รู้ว่าเราจะinsertที่บริเวณไหน
console.log(divParent2)
// divParent2.appendChild(newLiEle)
const liEle2 = document.querySelectorAll('div.lecturers>ul>li') //ทำให้เข้าไปอยู่ในระดับ li
console.log(liEle2)
const refNode = liEle2[1] //ทำref ให้ตำแหน่งที่เราจะเอาไปแทรกตรงไหน
console.log(refNode)
//divParent2.insertBefore(newLiEle2, refNode) //สร้างไว้ข้างหน้าNodeที่reference (nodeที่จะaddใหม่, จะเอาไว้ข้างหน้าnodeไหน)
// divParent2.insertBefore(newLiEle2, null) //สร้างไปต่อท้าย
// divParent2.replaceChild(newLiEle2, refNode) //แทนที่nodeที่reference
divParent2.removeChild(refNode) //ลบอันที่จะrefไปหา refnode (ลูกของParentที่เป็นrefnode)

/////////////////ต้องการปฏิสัมพันธ์กับ user///////////////////////
//window.alert, window.prompt, window.confirm
window.alert('Do you want to exit?') //ให้messageเฉยๆ

const userName = window.prompt('Please enter your name', 'ex., Somchai Jaidee') //(ข้อความสื่อสาร,สิ่งที่จะให้ใส่ไป)
console.log(userName) //return user input, ok=user input, cancel=null

const isExit = window.confirm(`Goodbye, ${userName}`)
console.log(isExit) //return booolean, ok=true, cancle=false