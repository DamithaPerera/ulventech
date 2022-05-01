const jwt = require('jsonwebtoken');
const config = require('config');

exports.generateAccessToken = (user) =>
    jwt.sign(user, config.get("Access_Token"), {
        expiresIn: config.get("AccessTokenExpirationTime"),
    });
