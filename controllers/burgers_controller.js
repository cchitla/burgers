let express = require("express");

let router = express.Router();

let burger = require("./../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((results) => { 
        res.render("index", { burgers: results});
    });
});


router.post("/api/burger", (req, res) => {
    burger.insertOne(req.body.burgerName, (results) => {
        res.redirect("/");
    });
});

//router.put and call burger.updateOne; 
    //devour button directs here


module.exports = router;