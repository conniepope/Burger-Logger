//setup code to connect Node to MySQL.

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: burgers_db
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadID);
    // connection.end();
});

// Export the connection
module.exports = connection;