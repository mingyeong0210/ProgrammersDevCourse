// express 모듈 세팅 // 모듈 설치 -> npm install express
const express = require('express')
const app = express()
app.listen(7777)
app.use(express.json()) // http 외 모듈 'json'

let db = new Map()
var id = 1 // 하나의 객체를 유니크하게 구별하기 위함 

// 로그인
app.post('/login', (req, res) => {
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

    if (loginUser) {
        console.log("같은거 찾았다!")

        // pwd도 맞는지 비교
        if (loginUser.password === password) {
            console.log("패스워드도 같다!")
        } else {
            console.log("패스워드는 틀렸다!")
        }
    } else {
        console.log("입력하신 아이디는 없는 아이디입니다.")
    }

})

// 회원가입
app.post('/join', (req, res) => {
    if (req.body.length !== 0) {
        db.set(id++, req.body)

        res.status(201).json({
            message : `${db.get(id-1).name}님 환영합니다.`
        })
    } else {
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    }
})

// 회원 개별 조회
// app.get('/users/:id', (req, res) => {
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
// app.delete('/users/:id', (req, res) => {
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
app
    .route('/users/:id')
    .get((req, res) => {
        let {id} = req.params
        id = parseInt(id)
    
        const user = db.get(id)
        if (user == undefined) {
            res.status(404).json({
                message : `회원 정보가 없습니다.`
            })
        } else {
            res.status(200).json({
                userId : user.userId,
                name : user.name
            })
        }
    })
    .delete((req, res) => {
        let {id} = req.params
        id = parseInt(id)
    
        const user = db.get(id)
        if (user == undefined) {
            res.status(404).json({
                message : `회원 정보가 없습니다.`
            })
        } else {
            db.delete(id)
    
            res.status(200).json({
                message : `${user.name}님 다음에 또 뵙겠습니다.`
            })
        }
    })