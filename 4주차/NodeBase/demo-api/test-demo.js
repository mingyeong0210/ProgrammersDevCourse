const express = require('express') // express모듈을 가져와 express라는 변수에 담는다 
const app = express() // createServer대신 app이란 변수에 express를 호출해 담음. 즉, 서버를 담아둔 것 

// API 요청 : GET + "http://localhost:3000/test"
// 응답 "TEST SUCCESS"
app.get('/test', function(req, res) {
    res.send('TEST SUCCESS')
})

// API 요청 : GET + "http://localhost:3000/test/1"
// 응답 "One!!"
app.get('/test/1', function(req, res) {
    res.send('One!!')
})

app.listen(3000) // 포트번호를 3000으로 설정 