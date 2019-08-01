var connection = require("../config/connection.js");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods needed in order to retrieve and store data in the database.
var orm = {

  selectAll: function(table) {
        return new Promise(function(resolve, reject) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, result) {
            if (err) reject(err);
            resolve(result);
          });
        })
    },

    insertOne: function(table, colName, newItem) {
      return new Promise(function(resolve, reject) {
        var queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [table, colName, newItem], function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
      })
    },

    updateOne: function(table, condition) {
      return new Promise(function(resolve, reject) {
        
          var queryString = "UPDATE " + table;
          queryString += " SET devoured = true";
          queryString += " WHERE ";
          queryString += condition;
      
          console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) reject(err);
          resolve(result);
        });
      })
    }
}

// Export the ORM object.
module.exports = orm;


