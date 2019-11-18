let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    // call burger.selectAll function then send result to render obj
    res.render("index", {});
});

// router.post and call burger.insertOne;
    //add burger directs here

//router.put and call burger.updateOne; 
    //devour button directs here


module.exports = router;