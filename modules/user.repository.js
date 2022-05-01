const connection = require('../database/db');

exports.signUpEmailCheckRepo = async (requestBody) => {
    const sql = `SELECT email from users where email= ?`

    return new Promise((resolve, reject) => {
        connection.all(sql, [requestBody.email], (err, rows) => {
            if (err) return reject(err)
            resolve(rows)
        });
    });
}

exports.signUpRepo = async (requestBody) => {
    const sql = `INSERT INTO users (name,email,password,accessToken,roleId) VALUES(?,?,?,?,?)`;
    return connection.run(sql, [requestBody.name, requestBody.email, requestBody.password, requestBody.accessToken,
        requestBody.roleId]);
}
