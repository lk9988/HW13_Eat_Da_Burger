$(function () {
	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		const createBurger = {
			burger_name: $("#createBurger").val().trim(),
			devoured: 0,
		};
		$.ajax("/api/burgers", {
			type: "POST",
			data: createBurger,
		}).then(function () {
			console.log("New burger added");
			location.reload();
		});
	});

	$(".devourBurger").on("click", function (event) {
		event.preventDefault();

		let id = $(this).data("id");
		console.log("hi");
		console.log(id, "id");
		let devouredChange = {
			devoured: 1,
		};
		console.log(devouredChange, "devouredChange");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devouredChange,
		}).then(function () {
			console.log("Burger devoured");
			location.reload();
		});
	});

	$("#deleteBtn").on("click", function (event) {
		event.preventDefault();

		let id = $(this).data("id");

		$.ajax({
			type: "DELETE",
			url: "/api/burgers/" + id,
		}).then(location.reload());
	});
});
