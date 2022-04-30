const connection = require('../database/db');

const createRoleTable = async () => {
    const roleTable = `CREATE TABLE IF NOT EXISTS
       roles(
        id INT PRIMARY KEY,
        type VARCHAR(10) NOT NULL
    )`;

    try {
        await connection.run(roleTable);
    } catch (error) {
        console.log('createRoleTable error =>', error)
    }
};

module.exports = createRoleTable;
