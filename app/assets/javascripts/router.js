var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      '' : 'welcome',
      'exercise': 'exercise'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $(".jumbotron").html(App.rootView.render().el);
    },

    welcome: function() {
      App.rootView.display(App.welcomeView)
    },

    exercise: function() {
      App.exerciseCollection.fetch().then(function() {
        App.rootView.display(App.ExerciseView);
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