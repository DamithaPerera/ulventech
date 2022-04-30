const sqlite3 = require('sqlite3').verbose();




const connectDB = async () => {
    try {
        await new sqlite3.Database('./ulventech.db', sqlite3.OPEN_READWRITE)
        console.log('database connected !!!')
    } catch (err) {
        if (err) return console.log('database error=>', err.message)
    }
}

module.exports = connectDB;
