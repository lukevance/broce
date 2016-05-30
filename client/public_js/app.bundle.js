webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('partsApp', []);

	__webpack_require__(2);
	// require('./pages');
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(10);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(3);

	angular.module('partsApp')
	  .directive('navbar', __webpack_require__(5));


/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(3);

	angular.module('partsApp')
	  .service('SignupService', __webpack_require__(7));


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	// inject htttp service from angular
	SignupService.$inject = ['$http'];
	function SignupService ($http) {
	  var message = 'you are trying to sign up!';
	  return message;
	}

	module.exports = SignupService;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(3);

	angular.module('partsApp')
	  .controller('SignupController', __webpack_require__(9));


/***/ },
/* 9 */
/***/ function(module, exports) {

	function SignupController () {
	  var vm = this;
	  vm.message = 'yeah it totally works';
	}

	module.exports = SignupController;


/***/ },
/* 10 */
/***/ function(module, exports) {

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
	        $scope.message = 'Look! I am an about page.';
	    });

	    partsApp.controller('contactController', function($scope) {
	        $scope.message = 'Contact us! JK. This is just a demo.';
	    });


/***/ }
]);
