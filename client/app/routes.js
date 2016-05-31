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
            // route for the contact page
            .when('/contact', {
                template : require('./pages/contact.html'),
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    partsApp.controller('signinController', function($scope) {
        // create a message to display in our view
        $scope.message = 'SIGN IN';
    });

    partsApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    partsApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a test.';
    });
