const orm = require("./../config/orm");

// call the orm functions here
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (results) => {
            cb(results);
        });
    },
    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", newBurger, (results) => {
            cb(results);
        });
    },
    updateOne: function(burgerName, cb) {
        orm.updateOne("burgers", burgerName, (results) => {
            cb(results)
        });
    }
};

module.exports = burger;