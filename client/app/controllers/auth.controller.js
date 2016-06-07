function AuthController(SigninService, SignupService) {

    function submitSignIn(credentials) {
        console.log('signin');
        SigninService(credentials, afterSignIn);




    }
    function afterSignIn(response) {

        console.log('afterSignIn');
    }

    function submitSignUp(credentials) {
        console.log('submitSignUp');
        SignupService(credentials, afterSignUp);


    }

    function afterSignUp(response) {
        console.log('afterSignUp');

    }

    // function signup(credentials){
    //   SignupService(credentials);
    //
    //
    // }


    var vm = this;
    vm.userInfo = {};
    // vm.signup = signup;
    vm.message = 'SIGN IN';
    vm.submit = submitSignIn;

}

module.exports = AuthController;
