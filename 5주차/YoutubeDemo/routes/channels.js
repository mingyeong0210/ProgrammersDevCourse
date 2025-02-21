const express = require('express')
const router = express.Router() // app 관련 내용은 app.js에서 해줄 것이기에 router로 변경 

router.use(express.json())

let db = new Map()
let id = 1

router
    .route('/')
    .get((req, res) => { // 채널 전체 조회
        if (db.size) {
            var channels = []
        
            db.forEach(function(value, key) {
                channels.push(value)
            })
    
            res.status(200).json(channels)
        } else {
            res.status(404).json({
                message : `조회할 채널이 없습니다.`
            })
        }
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

router
    .route('/:id')
    .get((req, res) => { // 채널 개별 조회
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        if (channel) {
            res.status(200).json(channel)
        } else {
            res.status(404).json({
                message : `채널 정보를 찾을 수 없습니다.`
            })
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
            res.status(404).json({
                message : `채널 정보를 찾을 수 없습니다.`
            })
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
            res.status(404).json({
                message : `채널 정보를 찾을 수 없습니다.`
            })
        }
    })

module.exports = router