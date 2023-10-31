const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
      firstname: 'Umaporn',
      lastname: 'Sup'
    },
    title: 'Welcome to KMUTT',
    sentDetail: {
      sentDate: new Date(Date.now()),
      host: {
        name: '@sit.kmutt'
      }
    }
  }

  //firstname, lastname
  let {
    recipent: { firstname, lastname } //ต้องบอกเส้นทางก่อน
  } = mail
  console.log(firstname)
  console.log(lastname)

  //host name
  let {
    sentDetail: {
      host: { name } //เส้นทางซ้อนกันก็ต้องบอกเส้นทางก่อน
    }
  } = mail
  console.log(name)