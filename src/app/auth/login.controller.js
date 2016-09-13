
//class LoginCtrl {

  //constructor(LoginService, $state, Session) {
    //this.LoginService = LoginService;
    //this.$state = $state;
    //this.user = {};
    //this.busy = false;
    //this.errors = [];
    //if(Session.isAuthenticated()) {
      //$state.go('arancel');
    //}
  //}

  //[> fired when the user click to "Entrar" <]
  //login() {
    //const {LoginService, $state } = this;
    //this.busy = true;
    //this.errors = [];

    //LoginService.requestToken(this.user, (response) => {
      //LoginService.login(response.data.token, (response) => {
        //[> get user data, create a session and redirect to home<]
        //console.log(response);
        //this.busy = false;
        //$state.go('arancel');
      //});
    //}, this.onError.bind(this));
  //}

  //[> handle errors on login <]
  //onError(response) {
    //console.log(response); 
    //this.busy = false;
    //if(response.data) 
      //this.errors = response.data.non_field_errors;
  //}
//}

//angular.module('app.auth').controller('LoginCtrl', LoginCtrl); 
