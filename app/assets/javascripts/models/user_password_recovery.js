var App = App || {};

(function(App) {
    App.UserPasswordRecovery = Backbone.Model.extend({
        url: '/users/password.json',
        paramRoot: 'user',

        defaults: {
            "email": ""
        }
    });
})(App);
