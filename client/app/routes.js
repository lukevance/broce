var partsApp = angular.module('partsApp', ['ngRoute']);

    // configure our routes


  partsApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page/signin page
            .when('/', {

                template : require('./pages/signin.html'),
                controller  : 'signinController',
                css : 'styles.css'
            })

            // route for the about page
            .when('/about', {

                template : require('./pages/about.html'),
                controller  : 'aboutController'
            })
            .when('/account', {
                template : require('./pages/account.html'),
                controller  : 'AccountController'
            })
            // route for the contact page
            .when('/contact', {

                template : require('./pages/contact.html'),
                controller  : 'contactController'
            })

            .when('/account', {

                template : require('./pages/account.html'),
                controller  : 'accountController'
            })
            .when('/test', {

                template : require('./pages/test.html'),
                controller  : 'accountController'
            })
            .when('/dash', {

                template : require('./pages/dash.html'),
                controller  : 'dashController'
            });
    });

  
