const mysql = require("mysql");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process.env.DB_PASSWORD,
	database: "burgers_db",
	multipleStatements: true,
});

connection.connect((err) => {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
