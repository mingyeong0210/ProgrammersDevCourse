const obj1 = {}
const obj2 = { message : "안 빔"}

console.log(Object.keys(obj1)) // [] -> length === 0
console.log(Object.keys(obj2)) // [ 'message ] -> length === 1

console.log(Object.keys(obj1).length === 0) // true
console.log(Object.keys(obj2).length === 0) // false

const num = 1
const str1 = "one"
const str2 = "" // 문자열도 객체 !! 

console.log(Object.keys(num).length === 0) // true -> 말 안됨
console.log(Object.keys(str1).length === 0) // false
console.log(Object.keys(str2).length === 0) // true 

// 함수로 활용 
function isEmpty(obj) {
    if (obj.constructor === Object) { //객체가 Object가 맞는지 확인  
        if (Object.keys(obj).length === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isEmpty(obj1)) // === console.log(Object.keys(obj1))