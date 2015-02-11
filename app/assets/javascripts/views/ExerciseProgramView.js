var App = App || {};

(function(App){
  App.ExerciseProgramView = Backbone.View.extend({
    
    initialize: function() {
      App.exerciseProgramCollection.on('add', this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['exercise_programs/index']({ exercise_programs: App.exerciseProgramCollection.toJSON() })
      );

      return this;
    }
  });
})(App);