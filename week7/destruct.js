//destructuring การแยกโครงสร้าง ดึงค่าpropertiesออกมาใช้ ให้เป็นอิสระจาก object | {} or [] จะอยู่ฝั่งซ้ายของ =
const mail = {
  sender: "SIT,KMUTT",
  recipent: "Warisa Thiamthong",
  title: "Welcome to KMUTT",
  sentDate: new Date(Date.now())
}
//Object destructuring
let { recipent } = mail
let { sentDate, title: header } = mail //sentDate, header(เปลี่ยนชื่อ title เป็น header)
console.log(recipent)
console.log(sentDate)
console.log(header)
