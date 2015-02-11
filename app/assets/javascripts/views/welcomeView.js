var App = App || {};

(function() {
  App.welcomeView = Backbone.View.extend({

    initialize: function() {
      App.exerciseCollection.on('add', this.render, this);
      App.exerciseProgramCollection.on('add', this.render, this);
      App.exerciseCategoryCollection.on('add', this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['welcome/index']()
      );

      return this;
    },
  });
})(App);