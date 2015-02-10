var App = App || {}

(function(App){
  App.Exercises = Backbone.Collection.extend({
    url: "/api/exercises",
    model: App.Exercise
  });

  App.exerciseCollection = new App.Exercises();
})(App);