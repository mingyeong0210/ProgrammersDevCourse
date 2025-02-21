const express = require('express')
const app = express()

app.listen(7777)

// user-demo, channel-demo 어떻게 소환하지? 모듈 호출하듯이!
const userRouter = require('./routes/users')
const channelRouter = require('./routes/channels')

app.use("/", userRouter)
app.use("/channels", channelRouter) // 공통 URL을 빼줌 