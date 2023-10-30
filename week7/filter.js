//การใช้ filter
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

//3. return array that contains keywords which include 'es' (case insensitive) 
const esKeywords = keywords.filter((keyword) => //ถ้าจะเอาarrayใหม่ไปใช้งานต้องเรียก ตัวแปร มาใช้ //ในแต่ละ keyword ที่ visit
  keyword.toLowerCase().includes('es') //ให้ check ว่า keyword เป็นตัวเล็กที่มีes
)//callbackFn ต้อง return true false เท่านั้น
console.log(esKeywords)
//includes():method นี้จะ return true/false เพราะมันจะเช็คหาตัวที่ต้องการหา
