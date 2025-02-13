// 자바스크립트 배열 비구조화
const array = [1, 2, 3, 4, 5]

// const num1 = array[0]
// const num4 = array[3]

// console.log(num1) // 1
// console.log(num4) // 4

// const [num2, num3, num5] = array

// console.log(num2) // 1
// console.log(num3) // 2
// console.log(num5) // 3

// 배열은 인덱스값을 가지고 있기에 순서대로 들어가게 됨 

const [ , num2, num3, , num5] = array // 원하지 않은 위치에는 빈칸으로 두기

console.log(num2) // 2
console.log(num3) // 3
console.log(num5) // 5