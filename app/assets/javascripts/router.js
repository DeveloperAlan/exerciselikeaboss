var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      '' : 'welcome',
      'exercises': 'exercises'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $(".jumbotron").html(App.rootView.render().el);

        $("nav a:not([data-backbone-navigation='false'])").on("click", function(event) {
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
    }

    // challenges: function() {
    //   App.challengesCollection.fetch().then(function() {
    //     App.rootView.display(App.View);
    //   });
    // }
  });
  App.router = new App.Router();
})(App);