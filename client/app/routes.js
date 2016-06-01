var partsApp = angular.module('partsApp', ['ngRoute']);

    // configure our routes
<<<<<<< HEAD
    partsApp.config(function($routeProvider) {
=======
  partsApp.config(function($routeProvider) {
>>>>>>> d5359bd9367fda7bfd077889695d891b75573d68
        $routeProvider

            // route for the home page/signin page
            .when('/', {
<<<<<<< HEAD
                templateUrl : 'pages/signin.html',
=======
                template : require('./pages/signin.html'),
>>>>>>> d5359bd9367fda7bfd077889695d891b75573d68
                controller  : 'signinController',
                css : 'styles.css'
            })

            // route for the about page
            .when('/about', {
<<<<<<< HEAD
                templateUrl : 'pages/about.html',
=======
                template : require('./pages/about.html'),
>>>>>>> d5359bd9367fda7bfd077889695d891b75573d68
                controller  : 'aboutController'
            })
            // route for the contact page
            .when('/contact', {
<<<<<<< HEAD
                templateUrl : 'pages/contact.html',
=======
                template : require('./pages/contact.html'),
>>>>>>> d5359bd9367fda7bfd077889695d891b75573d68
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    partsApp.controller('signinController', function($scope) {
        // create a message to display in our view
        $scope.message = 'SIGN IN';
    });

    partsApp.controller('aboutController', function($scope) {
<<<<<<< HEAD
        $scope.message = 'This can be anything';
    });

    partsApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK.';
=======
        $scope.message = 'Look! I am an about page.';
    });

    partsApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a test.';
>>>>>>> d5359bd9367fda7bfd077889695d891b75573d68
    });
