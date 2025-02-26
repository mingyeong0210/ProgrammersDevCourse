const express = require('express')
const router = express.Router() // app 관련 내용은 app.js에서 해줄 것이기에 router로 변경 

router.use(express.json())

let db = new Map()
let id = 1

router
    .route('/')
    .get((req, res) => { // (회원의) 채널 전체 조회
        var {userId} = req.body
        var channels = []

        if (db.size && userId) {
            db.forEach(function(value, key) {
                if (value.userId === userId) {
                    channels.push(value)
                }
            })

            // 예외 처리 2. userId가 가진 채널이 없을 때
            if (channels.length) {
                res.status(200).json(channels)
            } else {
                notFoundChannel()
            }
        } else {
            notFoundChannel()
        }
    })  
    .post((req, res) => { // 채널 개별 생성
        if (req.body.channelTitle) {
            let channel = req.body
            db.set(id++, channel)

            res.status(201).json({
                message : `${db.get(id-1).channelTitle} 채널을 응원합니다!`
            })
        } else {
            res.status(400).json({
                message : `요청 값을 제대로 보내주세요.`
            })
        }
    }) 

router
    .route('/:id')
    .get((req, res) => { // 채널 개별 조회
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        if (channel) {
            res.status(200).json(channel)
        } else {
            notFoundChannel()
        }
    }) 
    .put((req, res) => { // 채널 개별 수정
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        var oldTitle = channel.channelTitle
        if (channel) {
            var newTitle = req.body.channelTitle
            
            channel.channelTitle = newTitle
            db.set(id, channel)

            res.status(200).json({
                message : `채널명이 정상적으로 수정되었습니다. 기존 ${oldTitle} -> 수정 ${newTitle}`
            })
        } else {
            notFoundChannel()
        }
    })
    .delete((req, res) => { // 채널 개별 삭제
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        if (channel) {
            db.delete(id)
            
            res.status(200).json({
                message : `${channel.channelTitle}이 정상적으로 삭제되었습니다.`
            })
        } else {
            notFoundChannel()
        }
    })

function notFoundChannel() {
    res.status(404).json({
        message : `채널 정보를 찾을 수 없습니다.`
    })
}

module.exports = router