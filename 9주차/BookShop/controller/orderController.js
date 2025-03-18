const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const order = (req, res) => {
    const {items, delivery, totalQuantity, totalPrice, userId, firstBookTitle} = req.body;

    let delivery_id;
    let order_id;

    let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
    let values = [delivery.address, delivery.receiver, delivery.contact];

    conn.query(sql, values,
        (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            delivery_id = results.insertId;
            
            return res.status(StatusCodes.OK).json(results);
        }
    )

    sql = `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) 
            VALUES (?, ?, ?, ?, ?)`;
    values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];

    conn.query(sql, values,
        (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            order_id = results.insertId;
            console.log(order_id);
            
            return res.status(StatusCodes.OK).json(results);
        }
    )

    sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?`;

    values = []; // 초기화
    items.forEach((item) => {
        values.push ([order_id, item.book_id, item.quantity]); // 배열 안에 배열이 들어감 (2차원 배열)
    });

    conn.query(sql, [values],
        (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            order_id = results.insertId;
            console.log(order_id);
            
            return res.status(StatusCodes.OK).json(results);
        }
    )
};

const getOrders = (req, res) => {

};

const getOrderDetail = (req, res) => {

};

module.exports =  {
    order,
    getOrders,
    getOrderDetail
}