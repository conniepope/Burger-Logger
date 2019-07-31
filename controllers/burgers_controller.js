//import Express and `burger.js 
var express = require("express");

// Create the `router` for the app
var router = express.Router();

var burger = require("../models/burger.js");

//GET
router.get("/", function(req, res) {
    burger.selectAll()
    .then(function(data) {
        var object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});

//POST 
router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    var burgerName = req.body.burger;
    burger.create(burgerName)
    .then(function(result){
        res.json({id: result.insertId});
    }) 
});

//PUT

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        "devoured": req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end;
        }
    });
});

//export the `router`
module.exports = router;