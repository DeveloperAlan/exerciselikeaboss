var App = App || {};

(function(App){
  App.ExercisePrograms = Backbone.Collection.extend({
    url: "api/exercise_programs",
    model: App.ExerciseProgram
  });

  App.exerciseProgramCollection = new App.ExercisePrograms();
})(App);