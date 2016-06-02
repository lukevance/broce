angular.module('partsApp')

    // configure our routes
  .config(function($routeProvider) {
        $routeProvider
            // route for the home page/signin page
            .when('/', {
                template : require('./pages/signin.html'),
                controller  : 'SignupController as SC',
                css : 'styles.css'
            })
            // route for the about page
            .when('/about', {
                template : require('./pages/about.html'),
                controller  : 'AboutController as AC'
            })
            // route for the contact page
            .when('/contact', {
                template : require('./pages/contact.html'),
                controller  : 'ContactController as CC'
            });
    });
