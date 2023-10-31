//warm up: หา min max sum avg

//function declaration (การสร้างฟังก์ชันแบบให้บรรลุจุดประสงค์)
function arrayStats(arr) {
  //min,max,sum,avg
  if (arr == null || arr == undefined) return {} //โจทย์ไม่ได้กำหนด
  let min = arr[0],
    max = arr[0],
    sum = 0,
    avg = 0 //ตั้งตัวแปร
  for (let index = 0; index < arr.length; index++) { //วนลูปเพื่อ เอาค่าทุกตัวมาคิด
    sum += arr[index] //บวกสะสมค่า
    if (arr[index] < min) min = arr[index] //เช็คไปเรื่อยๆหาตัวที่น้อยที่สุด

    if (arr[index] > max) max = arr[index] //check ทุก if ใช้ if แยก!!!
  }

  return { sum: sum, avg: sum / arr.length, min: min, max: max } //มีsum avg=sum/length 
}

console.log(arrayStats([2, 4, 6, 8]))

console.log(arrayStats([1, 3, 5, 9]))
