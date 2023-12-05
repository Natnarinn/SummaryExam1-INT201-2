function echo(msg) {
  return msg
}
export default function sum(...nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
//สร้าง function ให้ file อื่นเรียกใช้
// export const MAX_VALUE = 100
export const MAX_VALUE = 100

//ESmodule
//named export ต้องใส่ปีกกาทั้งคู่
//1.) ยอมให้เอา sum,max_value ไปใช้ได้ โดยการใส่ export ไว้ข้างหน้า  
//echo ไม่ให้ใช้

//2.)อีกวิธี ไม่ต้องเอา export ไปใส่ข้างหน้า สามารถกำหนดทีเดียวท้ายสุดได้เลย
//export list
// export {sum,MAX_VALUE}
// export {sum as default ,MAX_VALUE}

//สามารถเปลี่ยนชื่อได้ ใช้ as


//3.) default export ให้สิทธิ์ฝั่ง import ตั้งชื่อเองเลย 
// import ไม่ต้องมีปีกกา
// มีแค่ 1 จุด ใน 1 ไฟล์