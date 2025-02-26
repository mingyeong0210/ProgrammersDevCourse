// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Youtube',
    dateStrings : true
});

module.exports = connection

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//         // results : 행 내용을 json array형태로 출력
//         // fields : results 외에 테이블이 가진 정보에 대한 내용

//         var {id, email, name, created_at} = results[0];
//         console.log(id); 
//         console.log(email); 
//         console.log(name); 
//         console.log(created_at);
//     }
// );