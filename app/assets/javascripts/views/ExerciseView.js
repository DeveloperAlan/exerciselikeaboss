var App = App || {};

(function(App){
  App.ExerciseView = Backbone.View.extend({

    initialize: function() {
      App.exerciseCollection.on('add', this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['exercises/index']({ exercises: App.exerciseCollection.toJSON() })
      );

      return this;
    }
  });
})(App); 