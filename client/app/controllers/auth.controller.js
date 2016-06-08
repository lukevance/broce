function AuthController(SigninService, SignupService) {

    function submitSignIn(credentials) {
        console.log('signin');
        SigninService(credentials, afterSignIn);
    }
    function afterSignIn(response) {
      // var errors = false;
      // $('#signin').submit(function(event){
        if(response.data.message !== nope){
          // errors = true;
          alert('wrong email address or password');
        }
      else{
          console.log('it worked');
        }
        console.log(response.data.message);
        console.log(nope);
      // });
    }

    function submitSignUp(credentials) {
        console.log('submitSignUp');
        SignupService(credentials, afterSignUp);
    }

    function afterSignUp(response) {
        if(response.config.data.password !== response.config.data.confPassword){
          alert("Passwords dont match");
        }else if (response.config.data.email !== response.config.data.confEmail) {
          alert("Email adresses dont match");
        }else{
          console.log("everything checks out");
        }
        console.log(response);

    }

    var nope = 'you are signed in!';

    var vm = this;
    vm.userInfo = {};
    vm.newUser = {};
    // vm.signup = signup;
    vm.message = 'SIGN IN';

    vm.submit = submitSignIn;
    vm.submitSU = submitSignUp

}

module.exports = AuthController;
