var figlet = require("figlet"); // require : 외부 모듈(figlet)을 가져오는 내부 모듈

// 함수의 매개변수로 변수 또는 값을 전달하는 것이 아니라, 함수를 전달하는 것 ! == "콜백 함수"
figlet("Mingyeong !!", function(err, data) { 
    // figlet의 매개변수 : 출력하려는 문자열, 익명의 함수 (이 함수를 다른 데에서 쓸 일이 없어서)
    // figlet 만든 사람이 매개변수로 함수를 받기로 했기 때문에 익명의 함수로 사용 

    // 첫번째 매개변수 문자열을 받아서 
    // 아스키 아트를 만든 다음에 
    // 두번째 매개변수 function 함수를 실행 = 콜 백 
    
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});