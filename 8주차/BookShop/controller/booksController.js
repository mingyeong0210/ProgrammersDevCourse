const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const allBooks = (req, res) => {
    let sql = 'SELECT * FROM books';
    
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    })
};

const bookDetail = (req, res) => {
    const {id} = req.params;

    let sql = 'SELECT * FROM books WHERE id=?';
    
    conn.query(sql, id,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            if(results[0])
                return res.status(StatusCodes.OK).json(results[0]);
            else
                return res.status(StatusCodes.NOT_FOUND).end();
    })
};

const booksByCategory = (req, res) => {

};

module.exports = {
    allBooks,
    bookDetail,
    booksByCategory
};