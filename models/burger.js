const orm = require("../config/orm.js");

const burger = {
	selectAll: function (callback) {
		orm.selectAll("burgers", function (result) {
			callback(result);
		});
	},
	insertBurger: function (columns, values, callback) {
		orm.insertBurger("burgers", columns, values, function (response) {
			callback(response);
		});
	},
	updateBurger: function (values, condition, callback) {
		orm.updateBurger("burgers", values, condition, function (response) {
			callback(response);
		});
	},
	deleteBurger: function (condition, callback) {
		orm.deleteBurger("burgers", condition, function (res) {
			callback(res);
		});
	},
};

module.exports = burger;
