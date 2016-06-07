angular.module('partsApp')

    // configure our routes

  .config(function($routeProvider) {
        $routeProvider
            // route for the home page/signin page
            .when('/', {

                template : require('./pages/signin.html'),
                controller  : 'AuthController as AU',
                css : 'styles.css'
            })
            // route for the about page
            .when('/about', {

                template : require('./pages/about.html'),
                controller  : 'AboutController as AC'
            })
            .when('/signup', {
                template : require('./pages/signup.html'),
                controller  : 'AuthController as AU'
            });
            // // route for the contact page
            // .when('/contact', {
            //
            //     template : require('./pages/contact.html'),
            //     controller  : 'contactController'
            // })
            //
            // .when('/account', {
            //
            //     template : require('./pages/account.html'),
            //     controller  : 'accountController'
            // })
            // .when('/test', {
            //
            //     template : require('./pages/test.html'),
            //     controller  : 'accountController'
            // })
            // .when('/dash', {
            //
            //     template : require('./pages/dash.html'),
            //     controller  : 'dashController'
            // });
    });
