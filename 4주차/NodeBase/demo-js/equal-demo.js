// ==, === 의 차이

if (1 == "1") { // 자료형은 상관 없이, 값만 비교
    console.log("같다") // 이게 출력
} else {
    console.log("같지 않다")
}

if (1 === "1") { //자료형, 값 모두 상관 있음 
    console.log("같다") 
} else {
    console.log("같지 않다") // 이게 출력
}