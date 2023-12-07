function echo(msg) {
  return msg
}
function sum(...nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
//สร้าง function ให้ file อื่นเรียกใช้
const MAX_VALUE = 100

//common JS
module.exports = { echo, sum, MAX_VALUE } //ยอมให้เอา echo ไปใช้ได้ sum,max_value ไม่ให้ใช้
// module.exports = { echo:echo,sum:sum,MAX_VALUE:MAX_VALUE }
