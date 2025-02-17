// 배열
const arr = [1, 2, 3, 4, 5]

// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음 매개변수로 그 요소를 전달하여 불리는 콜백함수
arr.forEach(function(a, b, c) { // 데이터, 인덱스, 객체 통째로
    // console.log(`a : ${a}, b : ${b}, c : ${c}`) // a에는 배열의 요소, b에는 인덱스값, c에는 객체 통째로 출력됨
})

// Map과 foreach의 만남
let map = new Map()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach(function(a, b, c) { // value, key, map 통째로
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})