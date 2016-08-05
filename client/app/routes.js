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
                controller  : 'AboutController as AU'
            })
            .when('/form', {
                template : require('./pages/form.html'),
                controller  : 'AccountController as AC'
            })
            .when('/user/dash', {
                template : require('./pages/dash.html'),
                controller  : 'AccountController as AC'
            })
            .when('/signup', {
                template : require('./pages/signup.html'),
                controller  : 'AuthController as AU'
            })

            // admin pages routes
            .when('/admin', {
              template: require('./pages/admin.html'),
              controller: 'AdminController as ADC'
            })
            .when('/admin/quotes', {
              template: require('./pages/admin/adminQuotes.html'),
              controller: 'AdminQuotesController as AQC'
            })
            .when('/404', {
              template: require('./pages/404.html'),
              controller: 'ErrorController as ERC'
            })
            .otherwise({redirectTo: '/404'});
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
