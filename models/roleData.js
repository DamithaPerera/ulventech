const connection = require('../database/db');

const insertRoleDataTable = async () => {


    const type1 = `INSERT INTO roles(id, type) SELECT 1, 'CUSTOMER' WHERE NOT EXISTS (SELECT 1 FROM roles WHERE 
                    type = 'CUSTOMER')`;
    const type2 = `INSERT INTO roles(id, type) SELECT 2, 'ADMIN' WHERE NOT EXISTS (SELECT 2 FROM roles WHERE 
                    type = 'ADMIN')`;

    try {
        await connection.run(type1);
        await connection.run(type2);
    } catch (error) {
        console.log('insertRoleDataTable error =>', error)
    }
};

module.exports = insertRoleDataTable;
