const express = require('express') // express모듈을 가져와 express라는 변수에 담는다 
const app = express() // createServer대신 app이란 변수에 express를 호출해 담음. 즉, 서버를 담아둔 것 

// GET + “/”
app.get('/', function (req, res) { 
    // '/' 앞에 http://localhost:3000이 생략되어있는 상태 
    // 해당 주소로 요청이 오면 콜백함수 호출 
  res.send('Hello World') // 응답 설정 
})

let nodjsBook = {
	title : "Node.js를 공부해보자",
	price : 20000,
	description : " 이 책 좋음 왜? 김송아 지음"
}

app.get('/products/1', function(req, res) {
    res.json(nodjsBook)
})

app.listen(3000) // 포트번호를 3000으로 설정 