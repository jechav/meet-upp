class RegisterCtrl {

  constructor(EventService) {
    this.user = {};
    this.GGprovider = new firebase.auth.GoogleAuthProvider();
    this.GGprovider.addScope('https://www.googleapis.com/auth/plus.login');
    this.Fprovider = new firebase.auth.FacebookAuthProvider();
    this.Fprovider;

    console.info('register ctrl');
  }
  register(){
    console.log(this.user);
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ...
    }).then(function(s){
      console.log('tdo ',s);
    });
  }
  GGregister(){
    firebase.auth().signInWithPopup(this.GGprovider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorCode, errorMessage);
      // ...
    });
  }
  Fregister(){
    firebase.auth().signInWithPopup(this.Fprovider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorCode, errorMessage);
      // ...
    });
  }

}

angular.module('app.auth').controller('RegisterCtrl', RegisterCtrl); 
