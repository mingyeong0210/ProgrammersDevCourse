var jwt = require('jsonwebtoken');
const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const dotenv = require('dotenv');

dotenv.config();

const addLike = (req, res) => {
    const book_id = req.params.id;

    let authorization = ensureAuthorization(req);

    let sql = `INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)`;
    let values = [authorization.id, book_id];

    conn.query(sql, values, 
        (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            return res.status(StatusCodes.OK).json(results);
    })
};

const removeLike = (req, res) => {
    const {book_id} = req.params.id;

    let authorization = ensureAuthorization(req);

    let sql = `DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?`;
    let values = [authorization.id, book_id];

    conn.query(sql, values, 
        (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            return res.status(StatusCodes.OK).json(results);
    })
};

function ensureAuthorization(req) {
    let receivedJWT = req.headers["authorization"];
    console.log("receivedJWT : ", receivedJWT);

    let decodedJWT = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
    console.log("decodedJWT : ", decodedJWT);

    return decodedJWT;
}

module.exports = {
    addLike,
    removeLike
}