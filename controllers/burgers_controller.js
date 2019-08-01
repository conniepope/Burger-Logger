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

    burger.updateOne(condition)
    .then()
        // res.json(result)
    });


//export the `router`
module.exports = router;