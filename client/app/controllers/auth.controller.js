function AuthController($window, SigninService, SignupService) {

    function submitSignIn(credentials) {
        console.log('signin');
        SigninService(credentials, afterSignIn);
    }
    function afterSignIn(response) {

        if(response.data.token){
          $window.localStorage.token = response.data.token;
          window.location="http://localhost:8080/#/dash";
          console.log(window.atob($window.localStorage.token.split(".")[1]));
          }
      else{
          //clear sign in fields and add message
          document.getElementById('signinEmail').value="";
          document.getElementById('signinPassword').value="";
          alert("sorry try again");

        }

    }

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


    var vm = this;
    vm.userInfo = {};
    // vm.signup = signup;
    vm.message = 'SIGN IN';

    vm.submit = submitSignIn;
    vm.submitSU = submitSignUp

}

module.exports = AuthController;
