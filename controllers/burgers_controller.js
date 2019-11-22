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


router.put("/api/burger/:name", (req, res) => {
    console.log(req.params);
    
    burger.updateOne(req.params.name, (results) => {
        res.redirect("/");
    })
})

module.exports = router;