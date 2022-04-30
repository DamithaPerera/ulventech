const createUserTable = require('./userTable');
const createRoleTable = require('./roleTable');

const createTables = async () => {
    try {
        await createUserTable();
        await createRoleTable();
    } catch (error) {
        console.log('createTables error =>', error)
    }
};

module.exports = createTables;
