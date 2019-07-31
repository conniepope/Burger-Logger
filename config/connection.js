//setup code to connect Node to MySQL.

var PORT = process.env.PORT || 8080;

require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.password,
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.end();
});

// Export the connection
module.exports = connection;