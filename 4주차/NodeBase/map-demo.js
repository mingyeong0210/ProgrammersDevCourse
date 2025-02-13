let db = new Map()
db.set(1, "NoteBook") // 키로 벨류를 찾을 수 있는 한 쌍을 저장 
db.set(2, "Cup")
db.set(3, "Chair")

console.log(db) // Map(3) { 1 => 'NoteBook', 2 => 'Cup', 3 => 'Chair' }
console.log(db.get(1)) // NoteBook
console.log(db.get(2)) // Cup
console.log(db.get(3)) // Chair