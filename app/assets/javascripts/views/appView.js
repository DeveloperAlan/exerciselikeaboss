var App = App || {};

(function(App){
  App.AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(
        HandlebarsTemplates['app/layout']()
      );
      return this;
    },

    display: function(View) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render().el);
    }
  });
})(App);