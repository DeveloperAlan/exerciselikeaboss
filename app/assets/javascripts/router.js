var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      '' : 'welcome',

    },

    initialize: function() {
      App.rootView = new App.AppView();
      $(".jumbotron").html(App.rootView.render().el);
    },

    welcome: function() {
      App.rootView.display(App.welcomeView)
    }

    // challenges: function() {
    //   App.challengesCollection.fetch().then(function() {
    //     App.rootView.display(App.View);
    //   });
    // }
  });
})(App);