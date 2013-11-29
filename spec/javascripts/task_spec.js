describe("Task", function() {
	var task = new Task({
		description: "Todo App com Backbone.js"
	});
	debugger
	it("has a description", function() {
		expect(task.get("description")).toEqual("Todo App com Backbone.js");
	})

})