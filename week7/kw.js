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