var partsApp = angular.module('partsApp', ['ngRoute']);

    // configure our routes
    partsApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page/signin page
            .when('/', {
                templateUrl : 'pages/signin.html',
                controller  : 'signinController',
                css : 'styles.css'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    partsApp.controller('signinController', function($scope) {
        // create a message to display in our view
        $scope.message = 'SIGN IN';
    });

    partsApp.controller('aboutController', function($scope) {
        $scope.message = 'This can be anything';
    });

    partsApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK.';
    });
