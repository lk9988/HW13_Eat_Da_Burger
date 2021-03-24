const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		console.log(data);
		res.render("index", {
			burgers: data,
		});
	});
});

router.post("/api/burgers", function (req, res) {
	burger.insertBurger(
		["burger_name", "devoured"],
		[req.body.burger_name, req.body.devoured],
		function (result) {
			res.json({ id: result.insertId });
		}
	);
});
// PUT is not working 
router.put("/api/burgers/:id", function (req, res) {
	let condition = "id = " + req.params.id;
	console.log("condition", condition);
	burger.updateBurger(
		{ devoured: req.body.devoured },
		condition,
		function (result) {
			if (result.changedRows == 0) {
				return res.status(404).end();
			} else {
				res.status(200).end();
			}
		}
	);
});

router.delete("/api/burgers/:id", function (req, res) {
	let condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.deleteBurger(condition, function (result) {
		if (result.changedRows === 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
