let mysql = require("mysql");

let config = {
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
};

let connection = mysql.createConnection(config);

connection.connect( (err) => {
    if (err) {
        console.log(`Error connecting to database: ${err.stack}`);
        return;
    }
    console.log(`Connected on thread: ${connection.threadId}`);
})

module.exports = connection;