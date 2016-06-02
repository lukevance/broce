webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	module.exports = __webpack_require__(72);


/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(true) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_require__.h()) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}

				if(!upToDate()) {
					check();
				}

				__webpack_require__(71)(updatedModules, updatedModules);

				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}

			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },

/***/ 71:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(updatedModules, renewedModules) {
		var unacceptedModules = updatedModules.filter(function(moduleId) {
			return renewedModules && renewedModules.indexOf(moduleId) < 0;
		});

		if(unacceptedModules.length > 0) {
			console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
			unacceptedModules.forEach(function(moduleId) {
				console.warn("[HMR]  - " + moduleId);
			});
		}

		if(!renewedModules || renewedModules.length === 0) {
			console.log("[HMR] Nothing hot updated.");
		} else {
			console.log("[HMR] Updated modules:");
			renewedModules.forEach(function(moduleId) {
				console.log("[HMR]  - " + moduleId);
			});
		}
	};


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	angular.module('partsApp', ['ngRoute']);

	// include styles from css folder
	__webpack_require__(73);

	// include angular modules
	__webpack_require__(77);
	__webpack_require__(81);
	__webpack_require__(83);
	__webpack_require__(85);
	//require('./pages');
	//require('./css');
	//dont know if these are supposed to go here but when I do I get an error...


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(74, function() {
				var newContent = __webpack_require__(74);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, ".form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox {\n    margin-bottom: 10px;\n}\n.form-signin .checkbox {\n    font-weight: normal;\n}\n.form-signin .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.account-wall {\n    margin-top: 20px;\n    padding: 40px 0px 20px 0px;\n    background-color: #f7f7f7;\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.login-title {\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n.profile-img {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n}\n.need-help {\n    margin-top: 10px;\n}\n.new-account {\n    display: block;\n    margin-top: 10px;\n}\n", ""]);

	// exports


/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(78);

	angular.module('partsApp')
	  .directive('navbar', __webpack_require__(80));


/***/ },

/***/ 80:
/***/ function(module, exports) {

	

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(78);

	angular.module('partsApp')
	  .service('SignupService', __webpack_require__(82));


/***/ },

/***/ 82:
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

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(78);

	angular.module('partsApp')
	  .controller('SignupController', __webpack_require__(84));


/***/ },

/***/ 84:
/***/ function(module, exports) {

	function SignupController () {
	  var vm = this;
	  vm.message = 'yeah it totally works';
	}

	module.exports = SignupController;


/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	angular.module('partsApp')

	    // configure our routes
	  .config(function($routeProvider) {
	        $routeProvider
	            // route for the home page/signin page
	            .when('/', {
	                template : __webpack_require__(86),
	                controller  : 'SignupController as SC',
	                css : 'styles.css'
	            })
	            // route for the about page
	            .when('/about', {
	                template : __webpack_require__(87),
	                controller  : 'aboutController'
	            })
	            // route for the contact page
	            .when('/contact', {
	                template : __webpack_require__(88),
	                controller  : 'contactController'
	            });
	    });

	    // // create the controller and inject Angular's $scope
	    // partsApp.controller('signinController', function($scope) {
	    //     // create a message to display in our view
	    //     $scope.message = 'SIGN IN';
	    // });
	    //
	    // partsApp.controller('aboutController', function($scope) {
	    //     $scope.message = 'Look! I am an about page.';
	    // });
	    //
	    // partsApp.controller('contactController', function($scope) {
	    //     $scope.message = 'Contact us! JK. This is just a test.';
	    // });


/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = "<!-- signin form view for injection -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n            <h1 class=\"text-center login-title\">{{ SC.message }}</h1>\n            <div class=\"account-wall\">\n                <form class=\"form-signin\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                        Sign in</button>\n                    <label class=\"checkbox pull-left\">\n                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                    <a href=\"#\" class=\"pull-right need-help\">Need help? </a><span class=\"clearfix\"></span>\n                </form>\n            </div>\n            <a href=\"pages/account.html\" class=\"text-center new-account\">Create an account </a>\n        </div>\n    </div>\n</div>\n";

/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron text-center\">\n    <h1>About Page</h1>\n\n    <p>{{ message }}</p>\n</div>\n";

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron text-center\">\n    <h1>Contact Page</h1>\n\n    <p>{{ message }}</p>\n</div>\n";

/***/ }

});