var App = App || {};

(function(App){
  App.ExerciseCategoryView = Backbone.View.extend({

    initialize: function() {
      App.exerciseCategoryCollection.on('add', this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['exercise_categories/index']({ exercise_categories: App.exerciseCategoryCollection.toJSON() })
        );

      return this;
    }
  });
})(App);