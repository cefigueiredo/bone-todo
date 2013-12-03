var TasksView = new Backbone.Collection.extend({
	tagName: 'div',

	render: function() {
		// this.collection.each(function(task) {
		// 	this.$el.append(new TaskView({ model: task }).render.$el)
		// })
	}
})