const connection = require('../database/db');

const createUserTable = async () => {
    const userTable = `CREATE TABLE IF NOT EXISTS
       users(
        id INT PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        email VARCHAR(256) NOT NULL,
        password VARCHAR(256) NOT NULL,
        accessToken VARCHAR(256),
        roleId INT NOT NULL,
        FOREIGN KEY (roleId) REFERENCES roles(id)
    )`;


    try {
        await connection.run(userTable)
    } catch (error) {
        console.log('createUserTable error =>', error)
    }
};

module.exports = createUserTable;
