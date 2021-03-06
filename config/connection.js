const mysql = require("mysql");
const dotenv = require("dotenv").config();

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "PASSWORD",
		database: "burgers_db",
	});
}

connection.connect((err) => {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
