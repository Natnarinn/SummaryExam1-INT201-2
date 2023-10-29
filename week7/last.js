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

let firstChars = ''

keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))

mails.forEach((mail) => console.log(mail))

//const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']

//1. string contains the first charactor of each keyword

//'dsrpf'

console.log(firstChars)

keywords.push('optional chaining')

console.log(keywords)

//2. all mail ids of mails array

const mailIds = []

mails.forEach((mail) => mailIds.push(mail.id))

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