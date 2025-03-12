const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const join = require('../controller/userController');

router.use(express.json());

// 회원가입
router.post('/join', join);

// 로그인
router.post('/login', (req, res) => {

});

// 비밀번호 초기화 요청
router.post('/reset', (req, res) => {

});

// 비밀번호 초기화
router.put('/reset', (req, res) => {

});

module.exports = router;