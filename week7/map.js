//การใช้ map
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

//4. array that contains all senders'firstname
const mailSenders = mails.map((mail) => mail.sender.firstname)//ไปเอา firstname ของแต่ละ mail ซึ่งซ้อนอยู่ใน properties sender
console.log(mailSenders)

//5. array that contains all mailids that start with 'logId-'
const logMailIds = mails.map(mail => 'lodId-' + mail.id )
console.log(logMailIds)

//result : ['logId-12323502'. 'logId-55588811']