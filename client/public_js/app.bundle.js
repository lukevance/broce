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
	// require('./directives');
	__webpack_require__(77);
	__webpack_require__(81);
	__webpack_require__(85);
	//require('./pages');


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
	exports.push([module.id, ".form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox {\n    margin-bottom: 10px;\n}\n.form-signin .checkbox {\n    font-weight: normal;\n    padding-left: 15px;\n}\n.form-signin .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.account-wall {\n    margin-top: 20px;\n    padding: 40px 0px 20px 0px;\n    background-color: #f7f7f7;\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.login-title {\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n.profile-img {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n}\n.need-help {\n    margin-top: 10px;\n}\n.new-account {\n    display: block;\n    margin-top: 10px;\n}\n/*.register {\n    margin: 0px 10px;\n}\nh2 {\n    margin-top: 2px;\n    margin-bottom: 2px;\n}\n.container {\n    max-width: 360px;\n}\n.divider {\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 5px;\n}\n.divider hr {\n    margin: 7px 0px;\n    width: 35%;\n}\n.left {\n    float: left;\n}\n.right {\n    float: right;\n}*/\n", ""]);

	// exports


/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(78);

	angular.module('partsApp')
	  .service('SignupService', ['$http', __webpack_require__(80)]);


/***/ },

/***/ 80:
/***/ function(module, exports) {

	'use strict';

	// inject http service from angular
	SignupService.$inject = ['$http'];
	function SignupService ($http) {
	  var message = 'you are trying to sign up!';
	  return message;
	}

	function SigninService ($http) {
	  return function (userCredentials, nextFunc) {
	    return $http.post('//localhost:3000/auth/signin', userCredentials)
	    .then(function(authorizedUserData){
	      console.log(authorizedUserData);
	      nextFunc(authorizedUserData);
	    })
	    .catch(function(err){
	      console.log(err);
	      // if necessary delete window storage of token
	    });
	  };
	}

	module.exports = {
	  SignupService: SignupService,
	  SigninService: SigninService
	};


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(78);

	angular.module('partsApp')
	  .controller('SignupController', __webpack_require__(82).SignupController)
	  .controller('SigninController', __webpack_require__(82).SigninController)
	  .controller('AboutController', __webpack_require__(83))
	  .controller('ContactController', __webpack_require__(84));


/***/ },

/***/ 82:
/***/ function(module, exports) {

	'use strict';
	    // var name = document.frm.signupName;
	    //
	    //        if( document.frm.name.value == "" )
	    //        {
	    //           alert( "Please provide your name!" );
	    //           document.myForm.Name.focus() ;
	    //           return false;
	    //        }
	    //        return(true);

	        //    if( document.myForm.EMail.value == "" )
	        //    {
	        //       alert( "Please provide your Email!" );
	        //       document.myForm.EMail.focus() ;
	        //       return false;
	        //    }
	        //
	        //    if( document.myForm.Zip.value == "" ||
	        //    isNaN( document.myForm.Zip.value ) ||
	        //    document.myForm.Zip.value.length != 5 )
	        //    {
	        //       alert( "Please provide a zip in the format #####." );
	        //       document.myForm.Zip.focus() ;
	        //       return false;
	        //    }
	        //
	        //    if( document.myForm.Country.value == "-1" )
	        //    {
	        //       alert( "Please provide your country!" );
	        //       return false;
	        //    }
	        //    return( true );
	        // }

	function SignupController () {
	  var vm = this;
	  vm.message = 'SIGN IN';
	}

	function SigninController () {
	  var vm = this;
	  vm.message = 'SIGN IN';
	}

	module.exports = {
	  SignupController: SignupController,
	  SigninController: SigninController
	};


/***/ },

/***/ 83:
/***/ function(module, exports) {

	function AboutController () {
	  var vm = this;
	  vm.message = 'Look! I am an about page.';
	}

	module.exports = AboutController;


/***/ },

/***/ 84:
/***/ function(module, exports) {

	function ContactController () {
	  var vm = this;
	  vm.message = 'Contact us! JK. This is just a test.';
	}

	module.exports = ContactController;


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
	                controller  : 'AboutController as AC'
	            })
	            .when('/account', {
	                template : __webpack_require__(88),
	                controller  : 'AccountController'
	            })
	            // route for the contact page
	            .when('/contact', {

	                template : __webpack_require__(89),
	                controller  : 'contactController'
	            })

	            .when('/account', {

	                template : __webpack_require__(88),
	                controller  : 'accountController'
	            })
	            .when('/test', {

	                template : __webpack_require__(90),
	                controller  : 'accountController'
	            })
	            .when('/dash', {

	                template : __webpack_require__(91),
	                controller  : 'dashController'
	            });
	    });


/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n            <h1 class=\"text-center login-title\">{{ SC.message }}</h1>\n            <div class=\"account-wall\">\n                <form class=\"form-signin\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                        Sign in</button>\n                    <label class=\"checkbox pull-left\">\n                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                    <a href=\"#\" class=\"pull-right need-help\">Need help? </a><span class=\"clearfix\"></span>\n                </form>\n            </div>\n\n          <!-- on click goes to register form -->\n            <a href=\"/#/account\" class=\"text-center new-account\">Create an account </a>\n        </div>\n    </div>\n</div>\n";

/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron text-center\">\n    <h1>About Page</h1>\n\n    <p>{{ AC.message }}</p>\n</div>\n";

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n                <form method=\"POST\" action=\"#\" role=\"form\" data-toggle-\"validator\" name=\"frm\" class=\"register\">\n<!-- registration view for view injection -->\n                    <div class=\"form-group\">\n                        <h2>Request Account</h2>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"signupName\">Your name</label>\n                        <input id=\"signupName\" retype=\"name\" name=\"name\" required maxlength=\"50\" class=\"form-control\" ng-model=\"user.name\" class=\"help-block\">\n                        <span ng-show=\"frm.name.$invalid && frm.name.$pristine && frm.name.$error.required\">Required</span>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"signupEmail\">Email</label>\n                        <input id=\"signupEmail\"\n                               type=\"email\"\n                               name=\"email\"\n                               ng-model=\"user.email\"\n                               required maxlength=\"50\"\n                               class=\"form-control\">\n                        <span ng-show=\"frm.email.$dirty && frm.email.$error.required\" >Required</span>\n                        <span ng-show=\"frm.email.$dirty && frm.email.$error.email\" >Not an email</span>\n                        <div class=\"help-block with-errors\"></div>\n\n\n                    <!-- <div class=\"form-group\">\n                      <label>Username</label>\n                      <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"user.username\" ng-minlength=\"3\" ng-maxlength=\"8\">\n                      <p ng-show=\"userForm.username.$error.minlength\" class=\"help-block\">Username is too short.</p>\n                      <p ng-show=\"userForm.username.$error.maxlength\" class=\"help-block\">Username is too long.</p>\n                    </div> -->\n\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"signupPassword\">Password</label>\n                        <input id=\"signupPassword\"\n                               type=\"password\"\n                               name = \"password\"\n                               ng-model=\"user.password\"\n                               ng-minlength=\"6\"\n                               ng-maxlength=\"50\"\n                               required\n                               maxlength=\"25\"\n                               class=\"form-control\"\n                               placeholder=\"at least 6 characters\"\n                               length=\"40\">\n                      <span ng-show=\"frm.password.$dirty && frm.password.$error.required\">Required</span>\n                      <span ng-show=\"frm.password.$dirty && frm.password.$error.minlength\">Minimum of 6 characters</span>\n                      <span ng-show=\"frm.password.$dirty && frm.password.$error.maxlength\">too Long!</span>\n\n                        <input name=\"signupPassword\" id=\"signupPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\" placeholder=\"at least 6 characters\" length=\"40\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button id=\"signupSubmit\" ng-disabled=\"frm.$invalid\" type=\"submit\" class=\"btn btn-info btn-block\">Request your account</button>\n                    </div>\n                    <p class=\"form-group\">By filling out this form you are not creating an account but requesting that you are an approved dealer. <a href=\"#\">Terms of Use</a> and our <a href=\"#\">Privacy Policy</a>.</p>\n                    <hr>\n                    <p></p>Already have an account? <a href=\"/#/\">Sign in</a></p>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron text-center\">\n    <h1>Contact Page</h1>\n\n    <p>{{ CC.message }}</p>\n</div>\n";

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = "<form class = \"form\" name=\"loginForm\" novalidate ng-submit=\"SignupController()\">\n  <div class=\"form-group\">\n    <label for=\"\">Email</label>\n    <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"user.email\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Password</label>\n    <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"user.password\" />\n  </div>\n  <div class=\"form-group\">\n    <button class=\"btn btn-primary\" type=\"submit\">Log In</button>\n  </div>\n\n</form>\n";

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = "";

/***/ }

});