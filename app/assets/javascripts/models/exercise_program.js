var App = App || {};

(function(App) {
  App.ExerciseProgram = Backbone.Model.extend({
    urlRoot: '/api/exercise_programs'
  });
})(App);