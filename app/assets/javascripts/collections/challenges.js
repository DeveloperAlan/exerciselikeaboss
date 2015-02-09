var App = App || {};

(function(App){
  App.Challenges = Backbone.Collection.extend({
    url: '/api/challenges',
    model: App.Challenge
  });
  
  App.challengesCollection = new App.Challenges();
})(App);