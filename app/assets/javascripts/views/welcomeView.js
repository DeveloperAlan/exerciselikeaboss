var App = App || {};

(function() {
  App.welcomeView = Backbone.View.extend({

    initialize: function() {
      this.render;
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['welcome/index']()
      );

      return this;
    },
  });
})(App);