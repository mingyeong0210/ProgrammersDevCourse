// express 모듈 세팅
const express = require('express')
const router = express.Router() 
const conn = require('../mariadb')

// simple query
conn.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
        // results : 행 내용을 json array형태로 출력
        // fields : results 외에 테이블이 가진 정보에 대한 내용
    }
);

router.use(express.json()) 

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
    if (req.body == {}) {
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    } else {
        const {email, name, password, contact} = req.body

        conn.query(
            'INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)', [email, name, password, contact],
            function(err, results, fields) {
                res.status(201).json(results)
            }
        )
    }
})

// 라우팅 (개별 조회, 개별 삭제)
router
    .route('/users')
    .get((req, res) => {    
        let {email} = req.body // string으로 해결하고 있기에 parseInt 사용 X 

        conn.query(
            'SELECT * FROM users WHERE email = ?', email,
            function(err, results, fields) {
                res.status(200).json(results)
            }
        );
    })
    .delete((req, res) => {
        let {email} = req.body
    
        conn.query(
            'DELETE FROM users WHERE email = ?', email,
            function(err, results, fields) {
                res.status(200).json(results)
            }
        );
    })

module.exports = router