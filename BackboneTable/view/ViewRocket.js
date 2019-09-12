var RocketView = Backbone.View.extend({
    
    tagName: 'tr',
    
    events: {
        'click .changeSize': 'changeSize',
        'click .deleteRow': 'deletRow',
        'blur .desc, name': 'editValue'
    },
    
    initialize: function () {
        this.template = _.template($('#viewRocket').html());
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },
    
    render: function () {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    },

    deletRow: function () {
       this.model.destroy();
    },

    editValue: function () {
      var res = this.model.set({
          name: this.$('.name').text(),
          desc: this.$('.descriptions').text(),
          size: +this.$('input.size').attr('value'),
      }, {validate: true});
      if (!res) {
          this.render();
      }
    },

    changeSize: function (event) {
        var diff = +($(event.target).attr('data-rel'));
        var size = this.model.get('size');
        var res = this.model.set({
            size: diff + size
        });
        if (!res) {
            this.render();
        }
    }

});