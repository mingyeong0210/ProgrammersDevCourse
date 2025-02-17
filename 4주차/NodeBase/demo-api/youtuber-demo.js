// express 모듈 세팅
const express = require('express')
const app = express()

app.listen(1234)

// 데이터 세팅 
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

let db = new Map()
var id = 1 // 값이 계속 변할거니 let으로 설정 -> 스코프에 걸리니 var로 변경 

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

// REST API 설계 
// 전체 조회
app.get('/youtubers', (req, res) => {
    res.json(db)
})

// 개별 조회
app.get('/youtuber/:id', function(req, res) {
    let {id} = req.params    
    id = parseInt(id)

    const youtuber = db.get(id)

    if (youtuber == undefined) { 
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else {
        res.json(youtuber)
    }
})

// 등록 
app.use(express.json()) // http 외 모듈인 '미들웨어' : json 설정
app.post('/youtuber', (req, res) => { 
    // 등록 - Map(db)에 저장(set)
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다!`
        // message : db.get(4).channelTitle + "님, 유튜버 생활을 응원합니다!"
    })
})