'use strict'

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      '' : 'welcome',
      'exercises': 'exercises',
      'exercise_programs': 'exercise_programs',
      'exercise_categories': 'exercise_categories'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $(".jumbotron").html(App.rootView.render().el);

        $("nav a").on("click", function(event) {
        event.preventDefault();
        App.router.navigate($(this).attr("href"), { trigger: true });
      });
    },

    welcome: function() {
      App.rootView.display(App.welcomeView)
    },

    exercises: function() {
      App.exerciseCollection.fetch().then(function() {
        App.rootView.display(App.ExerciseView);
      });
    },

    exercise_programs: function() {
      App.exerciseProgramCollection.fetch().then(function() {
        App.rootView.display(App.ExerciseProgramView);
      });
    },

    exercise_categories: function() {
      App.exerciseCategoryCollection.fetch().then(function(){
        App.rootView.display(App.ExerciseCategoryView);
      });
    }

    // challenges: function() {
    //   App.challengesCollection.fetch().then(function() {
    //     App.rootView.display(App.View);
    //   });
    // }
  });
  App.router = new App.Router();
})(App);