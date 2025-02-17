const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json()) // express의 json이라는 미들웨어 사용하는 방법
app.post('/test', (req, res) => {
  // body에 숨겨져서 들어온 데이터를 화면에 뿌려줘볼까?
  console.log(req.body.message)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})