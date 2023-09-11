let someone = '' //empty string
let who //who == undefined
console.log(typeof someone)
let discount = 0
let x = 5 //5
console.log(x)
if (someone) {
  let x = 1 //1
  who = 'member'
  discount = 0.10
} else {
  let x = 2//noerror 2
  who = 'guest'
  discount = 0.05
}
console.log(x)
console.log(who)
console.log(discount)

//?:
// someone ? (who = 'member') : (who = 'guest') //ปกติอันนี้ไม่ได้แต่ได้เฉย
who = someone ? 'member' : 'guest'
console.log(who) //guest
