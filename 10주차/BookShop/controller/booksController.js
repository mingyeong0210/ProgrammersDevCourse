const ensureAuthorization = require('../auth.js');
var jwt = require('jsonwebtoken');
const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

// (카테고리별, 신간 여부) 전체 도서 목록 조회
const allBooks = (req, res) => {
    let allBooksRes = {};
    let {category_id, news, limit, currentPage} = req.query;

    // limit : page 당 도서 수 
    // currentPage : 현재 페이지
    let offset = limit * (currentPage-1);

    let sql = 'SELECT SQL_CALC_FOUND_ROWS *, (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes FROM books ';
    let values = [];

    if(category_id && news) {
        sql += 'WHERE category_id=? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()';
        values = [category_id];
    }
    else if(category_id) {
        sql += 'WHERE category_id=?';
        values = [category_id];
    }
    else if(news) {
        sql += 'WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()';
    }

    sql += ' LIMIT ? OFFSET ?';
    values.push(parseInt(limit), offset);

    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                // return res.status(StatusCodes.BAD_REQUEST).end();
            }
            
            if (results.length === 0) {
                return res.status(StatusCodes.NOT_FOUND).end();
            }

            results.map(function(result) {
                result.pubDate = result.pub_date;
                delete result.pub_date;
            });

            allBooksRes.books = results;

            conn.query('SELECT found_rows()',
                (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(StatusCodes.BAD_REQUEST).end();
                    }
        
                    let pagination = {};
                    pagination.currentPage = parseInt(currentPage);
                    pagination.totalCount = results[0]["found_rows()"];
        
                    allBooksRes.pagination = pagination;
        
                    return res.status(StatusCodes.OK).json(allBooksRes);
                }
            )
        }
    );
};

const bookDetail = (req, res) => {
    // 로그인 상태가 아니면 => liked 빼고 보내기
    // 로그인 상태이면 => liked 추가해서 보내기
    let authorization = ensureAuthorization(req, res);

    if(authorization instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message" : "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            "message" : "잘못된 토큰입니다."
        });
    } else if(authorization instanceof ReferenceError) {
        let book_id = req.params.id;

        let sql = `SELECT *,
                        (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes
                    FROM books 
                    LEFT JOIN category 
                    ON books.category_id = category.category_id
                    WHERE books.id = ?`;
    
        let values = [book_id];
        
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }
    
                if(results[0]) {
                    // results[0].map(function(result) {
                    //     result.pubDate = result.pub_date;
                    //     delete result.pub_date;
                    // });
                    let result = results[0];
                    result.pubDate = result.pub_date;
                    delete result.pub_date;
                    result.categoryName = result.category_name;
                    delete result.category_name;
                    return res.status(StatusCodes.OK).json(results[0]);
                }
                else
                    return res.status(StatusCodes.NOT_FOUND).end();
        })
    } else { 
        let book_id = req.params.id;

        let sql = `SELECT *,
                        (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes,
                        (SELECT EXISTS (SELECT * FROM likes WHERE user_id = ? AND liked_book_id = ?)) AS liked
                    FROM books 
                    LEFT JOIN category 
                    ON books.category_id = category.category_id
                    WHERE books.id = ?`;
    
        let values = [authorization.id, book_id, book_id];
        
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }
    
                if(results[0]) {
                    // results[0].map(function(result) {
                    //     result.pubDate = result.pub_date;
                    //     delete result.pub_date;
                    // });
                    let result = results[0];
                    result.pubDate = result.pub_date;
                    delete result.pub_date;
                    result.categoryName = result.category_name;
                    delete result.category_name;
                    return res.status(StatusCodes.OK).json(results[0]);
                }
                else
                    return res.status(StatusCodes.NOT_FOUND).end();
        })
    }
};

module.exports = {
    allBooks,
    bookDetail
};