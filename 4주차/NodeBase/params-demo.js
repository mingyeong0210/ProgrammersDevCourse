const express = require('express') // express모듈을 가져와 express라는 변수에 담는다 
const app = express() // createServer대신 app이란 변수에 express를 호출해 담음. 즉, 서버를 담아둔 것 

app.get('/products/:n', function(req, res) {
    // products/ __ 빈칸에 오는 값을 n이라는 변수에 담아줘 
    // console.log(req.params)
    // console.log(req.params.n)

    // 자바스크립트는 문자로 된 숫자도 알아서 숫자로 인식하고 처리해줌 
    if ((req.params.n - 10) > 5) { 
        console.log("url로 전달받은 숫자가 10보다 크네요.")
    }

    let number = parseInt(req.params.n) - 10 // 문자로 된 숫자를 숫자로 
    console.log(number)

    res.json({
        num : req.params.n
    })
})


// 유튜브 채널 주소 : https://www.youtube.com/@15ya_egg
// app.get('/:nickname', function(req, res) {

//     const param = req.params // 바뀔 일이 없기에 변수에 저장해놓고 사용

//     res.json({
//         channel : param.nickname
//     })
// })

// 영상 주소 : https://www.youtube.com/watch?v=nwKyTzC7THI
// 타임라인 주소 : https://www.youtube.com/watch?v=nwKyTzC7THI&t=290s
app.get('/watch', function(req, res) {
    const q = req.query
    console.log(q.v)
    console.log(q.t)

    res.json({
        video : q.v,
        timeline :  q.t
    })
})

app.listen(3000) // 포트번호를 3000으로 설정 