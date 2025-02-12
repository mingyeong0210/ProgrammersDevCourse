const express = require('express') // express모듈을 가져와 express라는 변수에 담는다 
const app = express() // createServer대신 app이란 변수에 express를 호출해 담음. 즉, 서버를 담아둔 것 

app.get('/products/:n', function(req, res) {
    // products/ __ 빈칸에 오는 값을 n이라는 변수에 담아줘 
    // console.log(req.params)
    // console.log(req.params.n)

    res.json({
        num : req.params.n
    })
})

app.listen(3000) // 포트번호를 3000으로 설정 