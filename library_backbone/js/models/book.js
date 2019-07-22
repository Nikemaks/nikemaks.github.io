var app = app || {};
app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/img.jpg',
		title: 'No title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	}
})