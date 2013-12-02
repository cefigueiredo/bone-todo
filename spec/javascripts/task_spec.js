describe("Task", function() {
	var task = new Task({
		description: "Todo App com Backbone.js"
	});

	it("has a description", function() {
		expect(task.get("description")).toEqual("Todo App com Backbone.js");
	});

	it("doesn't start as done", function() {
		expect(task.get("isDone")).toBeFalsy();
	});

	it("can be set as done", function() {
		task.setDone();
		expect(task.get("isDone")).toBeTruthy();
	});
})