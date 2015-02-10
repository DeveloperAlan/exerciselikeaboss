var App = App || {};

(function(App){
  App.Exercise = Backbone.Model.extend({
    urlRoot: "api/exercises"
  });
})(App);