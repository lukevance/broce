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
    // make sign in request
    SigninService(credentials, afterSignIn);
  }

  // function to handle sign in response
  function afterSignIn(response) {
      console.log(response);
      if (response.data.token){
        $window.localStorage.token = response.data.token;
        var userProfile = JSON.parse(window.atob($window.localStorage.token.split(".")[1]));
        // reroute correctly based on role
        if (userProfile.role === 'standard') {
          // reroute to user home
        } else if (userProfile.role === 'admin') {
          // reroute to admin home
        }
        // window.location="http://localhost:8080/#/form";
        console.log(userProfile.role);
      } else {
        //clear sign in fields and add message
        document.getElementById('signinEmail').value="";
        document.getElementById('signinPassword').value="";
        alert("sorry try again");
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


}

module.exports = AuthController;
