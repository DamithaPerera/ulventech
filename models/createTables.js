const createUserTable = require('./userTable');
const createRoleTable = require('./roleTable');
const insertRoleData = require('./roleData');

const createTables = async () => {
    try {
        await createRoleTable();
        await createUserTable();
        await insertRoleData();
    } catch (error) {
        console.log('createTables error =>', error)
    }
};

module.exports = createTables;
