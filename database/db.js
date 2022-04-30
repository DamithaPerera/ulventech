const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./ulventech.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.log('database error=>', err.message)
});


module.exports = db;
