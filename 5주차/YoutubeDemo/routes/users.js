// express 모듈 세팅 // 모듈 설치 -> npm install express
const express = require('express')
// const app = express() -> app.js에서 할 것
// app.listen(7777) -> app.js에서 할 것
const router = express.Router() // 라우터로 활용하기 위함

// app.use(express.json()) // http 외 모듈 'json'
router.use(express.json()) // app 대신 router로 전부 교체 ! 

let db = new Map()
var id = 1 // 하나의 객체를 유니크하게 구별하기 위함 

// 로그인
router.post('/login', (req, res) => {
    // body로 userId, pwd 받아오기 
    const {userId, password} = req.body

    // userId가 db에 저장된 회원인지 확인
    var hasUserId = false
    var loginUser = {}

    db.forEach(function(user, id) {
        if (user.userId === userId) {
            hasUserId = true 
            loginUser = user
        } 
    })

    if (isExist(loginUser)) { // === if (Object.keys(loginUser).length)

        // pwd도 맞는지 비교
        if (loginUser.password === password) {
            res.status(200).json({
                message : `${loginUser.name}님 로그인 되었습니다.`
            })
        } else {
            res.status(400).json({
                message : `비밀번호가 틀렸습니다.`
            })
        }
    } else {
        res.status(404).json({
            message : `회원 정보가 없습니다.`
        })
    }
})

function isExist(obj) {
    if (Object.keys(obj).length) {
        return true
    } else {
        return false
    }
}

// 회원가입
router.post('/join', (req, res) => {
    if (req.body.length !== 0) {
        const {userId} = req.body
        db.set(userId, req.body)

        res.status(201).json({
            message : `${db.get(userId).name}님 환영합니다.`
        })
    } else {
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    }
})

// 회원 개별 조회
// router.get('/users/:id', (req, res) => {
//     let {id} = req.params
//     id = parseInt(id)

//     const user = db.get(id)
//     if (user == undefined) {
//         res.status(404).json({
//             message : `회원 정보가 없습니다.`
//         })
//     } else {
//         res.status(200).json({
//             userId : user.userId,
//             name : user.name
//         })
//     }
// })

// 회원 개별 탈퇴
// router.delete('/users/:id', (req, res) => {
//     let {id} = req.params
//     id = parseInt(id)

//     const user = db.get(id)
//     if (user == undefined) {
//         res.status(404).json({
//             message : `회원 정보가 없습니다.`
//         })
//     } else {
//         db.delete(id)

//         res.status(200).json({
//             message : `${user.name}님 다음에 또 뵙겠습니다.`
//         })
//     }
// })

// 라우팅 (개별 조회, 개별 삭제)
router
    .route('/users')
    .get((req, res) => {    
        let {userId} = req.body // string으로 해결하고 있기에 parseInt 사용 X 

        const user = db.get(userId)
        if (user) {
            res.status(200).json({
                userId : user.userId,
                name : user.name
            })
        } else {
            res.status(404).json({
                message : `회원 정보가 없습니다.`
            })
        }
    })
    .delete((req, res) => {
        let {userId} = req.body
    
        const user = db.get(userId)
        if (user) {
            db.delete(userId)
    
            res.status(200).json({
                message : `${user.name}님 다음에 또 뵙겠습니다.`
            })
        } else {
            res.status(404).json({
                message : `회원 정보가 없습니다.`
            })
        }
    })

module.exports = router