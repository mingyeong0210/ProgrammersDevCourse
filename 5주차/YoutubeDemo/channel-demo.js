const express = require('express')
const app = express()
app.listen(7777)
app.use(express.json())

let db = new Map()
let id = 1

app
    .route('/channels')
    .get((req, res) => { // 채널 전체 조회
        res.send("전체 조회")
    }) 
    .post((req, res) => { // 채널 개별 생성
        if (req.body.channelTitle) {
            db.set(id++, req.body)

            res.status(201).json({
                message : `${db.get(id-1).channelTitle} 채널을 응원합니다!`
            })
        } else {
            res.status(400).json({
                message : `요청 값을 제대로 보내주세요.`
            })
        }
    }) 

app
    .route('/channels/:id')
    .get((req, res) => { // 채널 개별 조회
        res.send("개별 조회")
    }) 
    .put((req, res) => { // 채널 개별 수정
        res.send("개별 수정")
    })
    .delete((req, res) => { // 채널 개별 삭제
        res.send("개별 삭제")
    })