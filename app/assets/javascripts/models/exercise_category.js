var App = App || {};

(function(App) {
  App.ExerciseCategory = Backbone.Model.extend({
    urlRoot: "/api/exercise_categories"
  });
})(App);