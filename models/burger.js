
// import `orm.js` file
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {

    create: function(newBurger){
        return orm.insertOne("burgers", "burger_name", newBurger);
    },

    selectAll: function(){
        return orm.selectAll("burger_name", "burgers");
    },

    updateOne: function(objColVals, condition){
        return orm.updateOne("burgers", objColVals, condition)
    }

}

module.exports = burger;