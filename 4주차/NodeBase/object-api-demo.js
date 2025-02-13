const express = require('express') // express모듈을 가져와 express라는 변수에 담는다 
const app = express() // createServer대신 app이란 변수에 express를 호출해 담음. 즉, 서버를 담아둔 것 

app.listen(3000) // 포트번호를 3000으로 설정 

// 유튜브 채널 주소 : https://www.youtube.com/@15ya_egg
// app.get('/:nickname', function(req, res) {

//     const {nickname} = req.params

//     res.json({
//         channel : nickname
//     })
// })

let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "993개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6천개"
}

let youtuber3 = {
    channelTitle : "테오",
    sub : "54.8만명",
    videoNum : "726개"
}

app.get('/:nickname', function(req, res) {
    const {nickname} = req.params

    if (nickname == "@15ya_egg") {
        res.json(youtuber1)
    } else if (nickname == "@ChimChakMan_Official") {
        res.json(youtuber2)
    } else if (nickname == "@TEO_universe") {
        res.json(youtuber3)
    } else {  // 개발자가 예상하지 못한 에러 = 예외 발생! -> 예외 처리
        res.json({
            message : "저희가 모르는 유튜버입니다."
        })
    }
})