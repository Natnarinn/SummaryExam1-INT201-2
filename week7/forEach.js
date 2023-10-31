//การใช้ forEach

const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']

const mails = [
  {
    id: 12323502,
    sender: {
      firstname: 'Umaporn',
      lastname: 'Sup'
    },
    subject: 'Welcome to SIT, KMUTT'
  },
  {
    id: 55588811,
    sender: {
      firstname: 'Tisanai',
      lastname: 'Chat'
    },
    subject: 'Reminder: INT201 Class'
  }
]

keywords.forEach((keyword) => console.log(keyword)) //loop ไปแสดงผลแต่ละ element ใน array (การกำหนดค่า parameter มักใช้(ไม่เติมs) หรือเป็นการแทนค่าตัวแปรชั่วคราววมา เพื่อแทน element เอาไว้แสดงผล)
mails.forEach((mail) => console.log(mail)) //เหมือนข้างบนแต่ไปเอา ของ mails มา

//const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
//1. string contains the first charactor of each keyword
//'dsrpf'
let firstChars = '' //ตั้งตัวแปรข้างนอกเก็บค่าไว้ โดยให้เริ่มต้อนที่ Empty
keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))
mails.forEach((mail) => console.log(mail))
console.log(firstChars)

//push(): เอาไว้เพิ่ม type array
keywords.push('optional chaining')
console.log(keywords)

//2. all mail ids of mails array = เอาข้อมูลของ mails id ทั้งหมด
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id)) //mailsIds เริ่มจาก array ว่างๆ แล้วเอาเข้า forEach มันจะไป push เอา id ทุกตัวของ mail มาใส่ไว้ใน array จนครบ 
console.log(mailIds)

//3. return array that contains keywords which include 'es' (case insensitive)
const esKeywords = keywords.filter((keyword) =>
  keyword.toLowerCase().includes('es')
)
console.log(esKeywords)

//4. array that contains all senders'firstname
const mailSenders = mails.map((mail) => mail.sender.firstname)
console.log(mailSenders)

//5. array that contains all mailids that start with 'logId-'

//result : ['logId-12323502'. 'logId-55588811']

 

const logMailIds = mails.map((mail) => 'logId-' + mail.id)

console.log(logMailIds)