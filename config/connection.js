let mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    let config = {
        host: "localhost",
        PORT: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    };
    
    connection = mysql.createConnection(config);
};


connection.connect( (err) => {
    if (err) {
        console.log(`Error connecting to database: ${err.stack}`);
        return;
    }
    console.log(`Connected on thread: ${connection.threadId}`);
})

module.exports = connection;