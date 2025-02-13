function first() {
    console.log("첫 번째");
}

function second() {
    console.log("두 번째");
}

function third() {
    console.log("세 번째");
}

first();

// 기본으로 내장되어있는 모듈
setTimeout(second, 2000); // 2초 뒤에 second 실행

third();