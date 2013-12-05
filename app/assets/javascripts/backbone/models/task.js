var Task = Backbone.Model.extend({
	defaults: {
		is_done: false
	},

	setDone: function() {
		this.set('is_done', true)
	}
});