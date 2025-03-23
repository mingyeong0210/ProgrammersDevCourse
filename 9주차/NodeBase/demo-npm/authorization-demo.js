var jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.listen(process.env.PORT);
  
// GET + '/jwt' : 토큰 발행
app.get('/jwt', function (req, res) { 
  var token = jwt.sign({ foo : 'bar'}, process.env.PRIVATE_KEY);

  res.cookie("jwt", token, {
    httpOnly : true
  });

  res.send("토큰 발행 완료");
});

// GET + '/jwt/decoded' : 토큰 검증
app.get('/jwt/decoded', function (req, res) { 
  let receivedJWT = req.headers["authorization"]
  var decoded = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
  res.send(decoded);
});