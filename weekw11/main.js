const rootNode = document //window.document //rootnode มากับ window อยู่แล้ว
//ดู properties ของ elements
console.log(rootNode)
console.log(rootNode.nodeName) //#document
console.log(rootNode.nodeType) //9
console.log(rootNode.nodeValue) //null

//html,body,head,title เรียกใช้บ่อยจึงมีproperties ให้เรียกใช้โดยรงได้เลย
//html node จะอ้าง child ไม่ได้ให้ใช้ documentElement
console.log(document.documentElement) //html element
console.log(document.documentElement.nodeName) //HTML
console.log(document.documentElement.nodeType) //1
console.log(document.documentElement.nodeValue) //null

console.log(document.body) //body element
console.log(document.body.nodeName) //BODY
console.log(document.body.nodeType) //1
console.log(document.body.nodeValue) //null

console.log(document.head) //head elementx
console.log(document.head.nodeName) //HEAD
console.log(document.head.nodeType) //1
console.log(document.head.nodeValue) //null

console.log(document.title) //head element ; สามารถอ้าง title ได้แต่ check properties ไม่ได้
console.log(document.title.nodeName) //undefined
console.log(document.title.nodeType) //undefined
console.log(document.title.nodeValue) //undefined



//////////////////////////////////////////////////////////
const headElement = document.head //หา head ก่อน
console.log(headElement)

//Child relationship
//1. childNodes (NodeList data type) = query children with all node types
//////////query node ลูกทั้งหมดของ head///////
const headChildren = headElement.childNodes //.childNodes จะได้ทุก node type ออกมาเป็น 
console.log(headChildren) //NodeList(7) [text, meta, text, title, text, comment, text] 
console.log('length:', headChildren.length)

headChildren.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})//แสดง properties ทุก node จนหมด

//2. children (HTMLCollection data type) = query children wiht ELEMENT type only
//HTMLCollection is array-like(คล้าย Array แต่ไม่ใช่)
//ต้องแปลง array-like เป็น array จริงๆ before using foreach function
console.log('length:', headElement.children.length) //.children จะแสดงแค่ที่เป็น ELEMENT_NODE เท่านั้น
Array.from(headElement.children).forEach((hc) => { //แปลงให้เป็น Array ก่อน
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
}) //ให้แสดงค่าทุก Element

// -->> สรุป 
//.childNodes จะได้ทุก node type ออกมาเป็น console.log(headChildren) //NodeList(7) [text, meta, text, title, text, comment, text]
//.children จะแสดงแค่ที่เป็น ELEMENT_NODE เท่านั้น
// <<--


//////////////////////////////////////////////////////
//parent relationship
//get parent including all node types
const headParentNode = headElement.parentNode
//get parent only element node type
const headParentElement = headElement.parentElement
console.log(headParentNode) //เอาทุก TYPE
console.log(headParentElement) //เอาเฉพาะ ELEMENT_TYPE

//////////////////////////////////////////////////////
//sibling relationship
//get previous sibling including all node types
const headPreviousSibling = headElement.previousSibling
console.log(headPreviousSibling)
//get previous sibling only element node type
const headPreviousSiblingElement = headElement.previousElementSibling
console.log(headPreviousSiblingElement)

//get next sibling including all node types
const headNextSibling = headElement.nextSibling
console.log(headNextSibling)
//get next sibling only element node type
const headNextSiblingElement = headElement.nextElementSibling
console.log(headNextSiblingElement)

//////////////////////////////////////////////////////
//get first child
console.log(headElement.firstChild)
console.log(headElement.firstElementChild)

//get last child
console.log(headElement.lastChild)
console.log(headElement.lastElementChild)
