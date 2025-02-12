const express = require('express') // express모듈을 가져와 express라는 변수에 담는다 
const app = express() // createServer대신 app이란 변수에 express를 호출해 담음. 즉, 서버를 담아둔 것 

// API 요청 : GET + /hello /bye /nicetomeetyou
// 응답 : hello bye nicetomeetyou
app.get('/hello', function(req, res) {
    res.json({
        say : '안녕하세요'
    })
})

app.get('/bye', function(req, res) {
    res.json({
        say : '안녕히 가세요'
    })
})

app.get('/nicetomeetyou', function(req, res) {
    res.json({
        say : '만나서 반갑습니다'
    })
})

app.listen(3000) // 포트번호를 3000으로 설정 