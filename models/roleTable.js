const connection = require('../database/db');

const createRoleTable = async () => {
    const roleTable = `CREATE TABLE IF NOT EXISTS
       roles(
        id INT PRIMARY KEY,
        type VARCHAR(10) NOT NULL
    )`;

    const type1 = `INSERT OR REPLACE INTO roles(id, type) VALUES (1, 'USER')`;
    const type2 = `INSERT OR REPLACE INTO roles(id, type) VALUES (2, 'ADMIN')`;

    try {
        await connection.run(roleTable);
        connection.run(type1);
        connection.run(type2);
    } catch (error) {
        console.log('createRoleTable error =>', error)
    }
};

module.exports = createRoleTable;
