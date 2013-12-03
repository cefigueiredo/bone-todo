var TaskView = Backbone.View.extend({
	tagName: 'div',

	initialize: function() {
		this.template = $('#task-template')
	},

	render: function() {
		var compiled = _.template(this.template.html())
		var html     = compiled(this.model.toJSON())

		this.$el.html(html)

		this
	}
})