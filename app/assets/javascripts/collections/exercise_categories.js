var App = App || {};

(function(App){
  App.ExerciseCategories = Backbone.Collection.extend({
    url: "/api/exercise_categories",
    model: App.ExerciseCategory
  });

  App.exerciseCategoryCollection = new App.ExerciseCategories();
})(App);