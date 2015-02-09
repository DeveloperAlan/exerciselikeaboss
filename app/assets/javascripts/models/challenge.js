var App = App || {};

(function(App){
  App.Challenge = Backbone.Model.extend({
    urlRoot: "/api/challenges"
  });
})(App);