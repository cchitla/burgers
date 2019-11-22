let connection = require("./connection");

let orm = {
    selectAll: function (table, cb) {
        let sqlQuery = "SELECT * FROM " + table;
        connection.query(sqlQuery, (error, results) => {
            if (error) throw error;
            cb(results);
        });
    },

    insertOne: function (table, newBurger, cb) {
        let sqlQuery = "INSERT INTO " + table + " SET ?"
        let query = {
            burger_name: newBurger,
            devoured: false
        };
        connection.query(sqlQuery, query, (error, results) => {
            if (error) throw error;
            cb(results);
        })
    },

    updateOne: function (table, burgerName, cb) {
        //mySQL queries
        let sqlQuery = "UPDATE " + table + " SET ? WHERE ?";
        let query = [
            {
                devoured: 1
            },
            {
                burger_name: burgerName
            }
        ];
        connection.query(sqlQuery, query, (error, results) => {
            if (error) throw error;
            cb(results);
        });
    }
};

module.exports = orm;