var jwt = require('jsonwebtoken'); // jwt 모듈 소환
var dotenv = require('dotenv');

dotenv.config(); // dotenv 설정 사용할거라고 선언

// 서명 = 토큰 발행
var token = jwt.sign({ foo : 'bar'}, process.env.PRIVATE_KEY); // token 생성 = jwt를 만들어서 서명을 했다! (페이로드, 나만의 암호키 필요) + SHA256 알고리즘 

console.log(token);

// 검증
// 만약 검증에 성공하면, 페이로드 값을 확인할 수 있음! 
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded);