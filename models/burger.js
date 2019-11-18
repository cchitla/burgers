const orm = require("./../config/orm");

// call the orm functions here
let burger = {
    selectAll: function() {
        orm.selectAll();
    },
    insertOne: function() {
        orm.insertOne();
    },
    updateOne: function() {
        orm.updateOne();
    }
};

module.exports = burger;