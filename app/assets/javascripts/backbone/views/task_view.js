var TaskView = Backbone.View.extend({
	tagName: 'li',
	className: 'task',

	render: function() {
		var compiled = _.template($('.template').html())
		this.$el.html(compiled(this.model.toJSON()))
		return this
	}
})

var TasksView = Backbone.View.extend({
	tagName: 'ul',
	className: 'tasks',

	initialize: function() {
		this.listenTo(this.collection, 'add', this.addTask)
	},

	addTask: function(task) {
		var view = new TaskView({ model: task })
		this.$el.append(view.render().el)
	},

	render: function() {
		this.$el.empty()
		this.collection.each(function(task) {
			var view = new TaskView({ model: task })
			this.$el.append(view.render().el)
		}, this)

		return this
	}
})



