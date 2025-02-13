if (true) {
    var num1 = 7;

    const num2 = 3; // 블록 스코프 -> {} 기준으로 안에서 선언되었다면 밖에서 사용 불가능 // 초기화 이후 값을 못 바꿈
    let num3 = 5; // 블록 {} 스코프 // 초기화 이후 값 바꿀 수 있음

    // num2 = 10; // const: 상수는 항상 같은 값 -> 변경 불가 
    num3 = 21; 

    console.log(num1 + " X " + num2 + " = " + num3); // 예전 방식
    console.log(`${num1} X ${num2} = ${num3}`); // 템플릿 문자열 : 위랑 똑같이 출력되지만 더 간편 
}

console.log(num1);
console.log(num2);
console.log(num3);