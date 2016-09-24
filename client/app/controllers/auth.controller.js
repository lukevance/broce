function AuthController($window, $location, SigninService, SignupService) {
  var vm = this;
  vm.userInfo = {};

  // function for submitting sign in credentials
  vm.submit = submitSignIn;
  function submitSignIn(credentials) {
    // check to be sure that user is signed out
    if ($window.localStorage.token) {
      delete $window.localStorage.token;
    }
    // make sign in request to server
    SigninService(credentials, afterSignIn);
  }

  // function to handle sign in response
  function afterSignIn(response) {
    // check for auth token in response
    if (response.data.token){
      $window.localStorage.token = response.data.token;
      var userProfile = JSON.parse(window.atob($window.localStorage.token.split(".")[1]));
      // reroute correctly based on role
      if (userProfile.role === 'standard') {
        // reroute to user home
        $location.path('/user/dash');
      } else if (userProfile.role === 'admin') {
        // reroute to admin home
        $location.path('/admin');
      }
      // if no token in response, handle appropriately
    } else {
      //clear sign in fields and add message
      vm.userInfo.email = '';
      vm.userInfo.password = '';
      // show error message to inform user of unsuccessful request
      vm.error = true;
      // check for error message in response
      if (response.data.message){
        // set error message users view
        vm.errorMessage = response.data.message;
      } else {
        // default error message for other unknown errors
        vm.errorMessage = 'Something broke. Please try again.';
      }
    }
  }

  // function for submitting sign up form
  vm.submitSU = submitSignUp;
  function submitSignUp(credentials) {
      console.log('submitSignUp');
      SignupService(credentials, afterSignUp);
  }

  function afterSignUp(response) {
      if(response.config.data.password !== response.config.data.confPassword){
        alert("Passwords ");
      }else if (response.config.data.email !== response.config.data.confEmail) {
        alert("Email adresses dont match");
      }else{
        console.log("everything checks out");
      }
      console.log(response);

  }

  vm.enterPressed = enterPressed;
  function enterPressed(keyEvent, userInfo) {
    if (keyEvent.which === 13) submitSignIn(userInfo);
  }


}

module.exports = AuthController;
