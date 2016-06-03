
function SignupController () {
<<<<<<< Updated upstream
  var vm = this;
  vm.message = 'yeah it totally works';
// password validation
//username validation
//call on service to htpp request
=======
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
>>>>>>> Stashed changes

}

function SigninController($scope){


      $scope.message = 'SIGN IN';

}

module.exports = {SignupController: SignupController, SigninController: SigninController};
