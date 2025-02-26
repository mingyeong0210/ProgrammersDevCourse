// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Youtube'
});

// simple query
connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
        console.log(results); // results contains rows returned by server // 행 내용을 json array형태로 출력
        console.log(fields); // fields contains extra meta data about results // results 외에 테이블이 가진 정보에 대한 내용
    }
);