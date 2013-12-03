var MainView = Backbone.View.extend({
	events: {
		"click input[type=submit]": "newTask"
	},

	initialize: function() {
		this.tasks     = new Tasks()
		this.tasksView = new TasksView({ collection: this.tasks })

		this.listenTo(this.tasks, 'add', this.render)
	},

	newTask: function(e) {
		var text = $(e.currentTarget).val()
		this.tasks.add(new Task({ name: text }))
	},

	render: function() {
		this.$el.html(this.tasksView.render().$el)
	}
})

$(function() {
	new MainView({ el: $('.tasks') })
})