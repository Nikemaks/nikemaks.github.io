var RocketsView = Backbone.View.extend({

    events: {
        'click .addObject': 'addObject',
        'click .toJSON': 'toJSON',
        'click [data-sort]': 'renderList',
    },

    initialize: function () {
        this.template = _.template($('#viewRockets').html());
        this.$el.html(this.template());
        this.coll = new RocketsCollection();
        this.listenTo(this.coll, 'all', this.render);
        this.listenTo(this.coll, 'add', this.addOne);
    },

    render: function () {
        var size = 0;
        this.coll.each(function (obj, index) {
            size += obj.get('size');
        });

        this.$('.rockets-count').text(this.coll.length);
        this.$('.rockets-size').text(size);
    },

    addObject: function () {
        this.coll.add({});
    },

    addOne: function (model) {
        var view = new RocketView({model: model});
        this.$('.rocketList').append(view.render());
    },

    renderList: function (event) {
        this.$('.rocketList').html('');
        this.coll.sortParam = $(event.target).attr('data-sort');
        this.coll.sortdModel = this.coll.sortdModel*(-1);
        this.coll.sort();
        var that = this;
        this.coll.each(function (model, index) {
            that.addOne(model);
        })
    },

    toJSON: function () {
        var json = this.coll.toJSON();
        $('.json-out').html(JSON.stringify(json));
    }

});