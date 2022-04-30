const connection = require('../database/db');

const createRoleTable = async () => {
    const roleTable = `CREATE TABLE IF NOT EXISTS
       roles(
        id INT PRIMARY KEY,
        type VARCHAR(10) NOT NULL
    )`;

    const type1 = `INSERT INTO roles(id, type) SELECT 1, 'CUSTOMER' WHERE NOT EXISTS (SELECT 1 FROM roles WHERE 
                    type = 'CUSTOMER')`;
    const type2 = `INSERT INTO roles(id, type) SELECT 2, 'ADMIN' WHERE NOT EXISTS (SELECT 2 FROM roles WHERE 
                    type = 'ADMIN')`;

    try {
        connection.run(roleTable);
        connection.run(type1);
        connection.run(type2);
    } catch (error) {
        console.log('createRoleTable error =>', error)
    }
};

module.exports = createRoleTable;
