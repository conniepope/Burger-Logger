var connection = require("../config/connection.js");

//--------------------------- borrowed code - look over to understand
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
//------------------------------
// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods needed in order to retrieve and store data in the database.
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
    updateOne: function(table, objColVals, condition) {
      return new Promise(function(resolve, reject) {
        
          var queryString = "UPDATE " + table;
          queryString += " SET ";
          queryString += objToSql(objColVals);
          queryString += " WHERE ";
          queryString += condition;
      
        connection.query(queryString, function(err, result) {
          if (err) reject(err);
          resolve(result);
        });
      })
    }
}

// Export the ORM object.
module.exports = orm;


