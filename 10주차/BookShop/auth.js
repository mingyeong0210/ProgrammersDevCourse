var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const ensureAuthorization = (req, res) => {
    try {
        let receivedJWT = req.headers["authorization"];
        console.log("receivedJWT : ", receivedJWT);
    
        let decodedJWT = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
        console.log("decodedJWT : ", decodedJWT);

        return decodedJWT;
    } catch (err) {
        console.log(err.name);
        console.log(err.message);

        return err;
    }
};

module.exports = ensureAuthorization;