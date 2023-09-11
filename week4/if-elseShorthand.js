let someone = '' //empty string
let who //who == undefined
console.log(typeof someone)
let discount = 0
let x = 5 //5
console.log(x)
if (someone) {
  let x = 1
  con
  who = 'member'
  discount = 0.1
} else {
  who = 'guest'
  discount = 0.05
}
//?:
someone ? (who = 'member') : (who = 'guest') //ปกติอันนี้ไม่ได้แต่ได้เฉย
who = someone ? 'member' : 'guest'
console.log(who)
