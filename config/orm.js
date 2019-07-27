var connection = require("../config/connection.js");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
  // selectAll()
    selectAll: function(colName, table) {
        return new Promise(function(resolve, reject) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colName, table], function(err, result) {
            if (err) reject(err);
            resolve(result);
          });
        })
    },
  // insertOne()
    insertOne: function(table, colName, newItem) {
      return new Promise(function(resolve, reject) {
        var queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [table, colName, newItem], function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
      })
    },
  // updateOne()
    updateOne: function(table, colName, itemName) {
      return new Promise(function(resolve, reject) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        connection.query(queryString, [table, colName, colName, itemName], function(err, result) {
          if (err) reject(err);
          resolve(result);
        });
      })
    }
}

// Export the ORM object.
module.exports = orm;