const jwt = require('jsonwebtoken');
const config = require('config');

exports.generateAccessToken = (user) =>
    jwt.sign(user, config.get("Access_Token"));

exports.validateJwt = (token) => {
    let decoded;
    try {
        decoded = jwt.verify(token, config.get("Access_Token"));
    } catch (err) {
        return err;
    }
    return decoded;
};
