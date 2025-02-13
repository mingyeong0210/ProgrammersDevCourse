const express = require('express')
const app = express()

app.listen(3000)

// localhost:3000/1 => NoteBook
// localhost:3000/2 => Cup
// localhost:3000/3 => Chair

app.get('/:id', function(req, res) {
    // const {id} = req.params // 문자로된 숫자를 숫자를 바꿀 것이기에 const대신 let
    let {id} = req.params
    console.log(id)
    // console.log(db.get(id)) // id는 문자열인데 db에는 숫자로 들어가 있음 
    
    id = parseInt(id) //"숫자" => 숫자  
    console.log(db.get(id)) 

    if (db.get(id) == undefined) { // 예외 처리리
        res.json({
            message : "없는 상품입니다."
        })
    } else {
        res.json({
            id : id,
            productName : db.get(id)
        })
    }
})

let db = new Map()
db.set(1, "NoteBook") // 키로 벨류를 찾을 수 있는 한 쌍을 저장 
db.set(2, "Cup")
db.set(3, "Chair")
db.set("1", "MG") 

// console.log(db) // Map(3) { 1 => 'NoteBook', 2 => 'Cup', 3 => 'Chair' }
// console.log(db.get(1)) // NoteBook
// console.log(db.get("1")) // MG // 숫자와 문자를 구분함 
// console.log(db.get(2)) // Cup
// console.log(db.get(3)) // Chair