var App = App || {};

(function(App) {
    App.UserSession = Backbone.Model.extend({
        url: '/users/sign_in.json',
        paramRoot: 'user',

        defaults: {
            "email": "",
            "password": ""
        }
    });
})(App);
