// const express = require("express");

// const PORT = process.env.PORT || 7856;

// const app = express();

// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// const routes = require("./controllers/controller.js");

// app.use(routes);

// app.listen(PORT, function () {
// 	console.log("Server listening on: http://localhost:" + PORT);
// });

var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function () {
	console.log("App now listening at localhost:" + PORT);
});
