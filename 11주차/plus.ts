// a, b 덧셈하고 결과물을 리턴하는 함수
// TS
function plusTS(a : number, b : number) { // 타입 체크 
    return a + b;
}

console.log(plusTS(3,5));

console.log(plusTS('3', '5')); // 타입이 정해져있어서 에러 발생 -> 명확함