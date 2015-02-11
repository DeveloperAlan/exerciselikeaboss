var App = App || {};

(function() {
  App.defaultView = Backbone.View.extend({

    initialize: function() {
      this.render;
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['default/index']()
      );

      return this;
    },
  });
})(App);