$("#clear").click( () => {
	console.log("clicked on clear btn");
	$("#donor-form").trigger("reset");
});