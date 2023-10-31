//warm up: check file รูปภาพ

//วิธีที่ 1: ตัดข้อความมาแค่ส่วนท้าย(ส่วนนามสกุลไฟล์)
//ใช้ substring() ตัดข้อความ || syntax: substring(indexStart) or substring(indexStart, indexEnd) ไม่รวมตัวสุดท้าย
//ใช้ lastIndexOf() บอกค่าIndexของตัวอักษรนั้นที่อยู่ท้ายสุดของข้อความ
function findFileExtension(filename) {
  return filename.substring(filename.lastIndexOf('.')) //แปลว่าให้ return ตัวแปรfilename โดยตัดข้อความ(IndexStart = เลขIndexของ '.' ตัวสุดท้าย)
}
findFileExtension('Sample.ex.jpeg') //จะแสดงตั้งแต่.ตัวสุดท้ายออกมา


//วิธีที่ 2: เอาตัวลงท้ายไปเช็ค
function isEmageFileExtension(filename){
    if (filename === null || filename === undefined) return false 
    //ถ้าnullหรือundefinedจะไม่check (เคลียร์อันที่ไม่ต้องการออกไปก่อนแล้วค่อยcheckอันที่ต้องการ)
   return (
    filename.endsWith('.png') || 
    filename.endsWith('.jpg') || 
    filename.endsWith('.jpeg') ||
    filename.endsWith('.gif') || 
    filename.endsWith('.svg') 
    )
}
console.log(isEmageFileExtension('sample.png'))
console.log(isEmageFileExtension('sample.jpg'))
console.log(isEmageFileExtension('sample.jpeg'))
console.log(isEmageFileExtension('sample.gif'))
console.log(isEmageFileExtension('sample.svg'))
console.log(isEmageFileExtension('sample.see'))
console.log(isEmageFileExtension(null))
console.log(isEmageFileExtension(undefined))