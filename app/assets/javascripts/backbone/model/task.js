var Task = Backbone.Model.extend({
	isDone: true,

	setDone: function() {
		isDone = true;
	}
});