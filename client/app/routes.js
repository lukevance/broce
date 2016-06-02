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

    // create the controller and inject Angular's $scope
    partsApp.controller('signinController', function($scope) {
        // create a message to display in our view--
        $scope.message = 'SIGN IN';
    });

    partsApp.controller('aboutController', function($scope) {
        $scope.message = 'This can be anything';
    });

    partsApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK.';

    });
    partsApp.controller('accountController', function($scope) {
      $scope.SubmitForm = function() {

                 // check to make sure the form is completely valid
                 if ($scope.frm.$valid) {
                     alert('it works');
                     console.log('true')
                 }

             };

    });
    partsApp.controller('dashController', function($scope) {
        $scope.message = 'dash page test';

    });
