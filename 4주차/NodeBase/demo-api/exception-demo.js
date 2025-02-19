const express = require('express')
const app = express()
app.listen(1234)

// 배열(리스트)
const fruits = [
    { id : 1, name : 'apple'},
    { id : 2, name : 'orange'},
    { id : 3, name : 'strawberry'},
    { id : 4, name : 'blueberry'}
] 

// 과일 전체 조회
app.get('/fruits', (req, res) => {
    res.json(fruits) // json array
})

// 과일 개별 조회
app.get('/fruits/:id', (req, res) => {
    let id = req.params.id
    // 배열이기 때문에 인덱스가 0부터 시작

    // 방법1. id값에 1 빼기
    // let fruit = fruits[id - 1] 

    // 방법2. 객체 중에 id가 일치하는 값 찾기
    // var findFruit = ""

    // fruits.forEach(function(fruit) {
    //     if (fruit.id == id) {
    //         findFruit = fruit
    //     }
    // })

    // 위 코드를 한줄로 줄이면
    var findFruit = fruits.find(f => f.id == id) // fruits 배열 안에 있는 객체 중, id 값이 params.id랑 같은 객체를 찾겠다
    
    if (findFruit) {
        res.json(findFruit)
    } else { // 예외를 터트린다 = http status code를 성공이 아니라 실패로 
        res.status(404).send( // 찾는 거 없음 + 메시지 
            "전달주신 id로 저장된 과일이 없습니다."
        ) 
    }

    
})
