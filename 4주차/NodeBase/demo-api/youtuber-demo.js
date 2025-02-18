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
    var youtubers = {}
    db.forEach(function(value, key) {
        youtubers[key] = value
    })

    res.json(youtubers)
})

// 개별 조회
app.get('/youtubers/:id', function(req, res) {
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
app.post('/youtubers', (req, res) => { 
    // 등록 - Map(db)에 저장(set)
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다!`
        // message : db.get(4).channelTitle + "님, 유튜버 생활을 응원합니다!"
    })
})

// 개별 삭제
app.delete('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)

    if (youtuber == undefined) { // 예외 처리
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else {
        const channelTitle = youtuber.channelTitle
        db.delete(id)
    
        res.json({
            message : `${channelTitle}님, 아쉽지만 다음에 또 뵙겠습니다.`
        })
    }
})

// 전체 삭제
app.delete('/youtubers', (req, res) => {
    var msg = ""

    // db에 값이 1개 이상이면, 전체 삭제
    if (db.size >= 1) {
        db.clear()
        msg = "전체 유튜버가 삭제되었습니다."
    } else {  // 값이 없으면,
        msg = "삭제할 유튜버가 없습니다."
    }

    res.json({
        message : msg
    })
})

// 개별 수정
app.put('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)
    var oldTitle = youtuber.channelTitle

    if (youtuber == undefined) {
        res.json({
            message : `요창하신 ${id}번은 없는 유튜버입니다.`
        })
    } else {
        var newTitle = req.body.channelTitle
        youtuber.channelTitle = newTitle
        db.set(id, youtuber)

        res.json({
            message : `${oldTitle}님, 채널명이 ${newTitle}으로 변경되었습니다.`
        })
    }
})