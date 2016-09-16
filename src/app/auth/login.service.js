class LoginService {

  constructor($firebaseAuth){
    this.firebaseAuthObject = $firebaseAuth();
    this.GGprovider = new firebase.auth.GoogleAuthProvider();
    this.GGprovider.addScope('https://www.googleapis.com/auth/plus.login');
    this.Fprovider = new firebase.auth.FacebookAuthProvider();
  }

  login(data) {
    return this.firebaseAuthObject.$signInWithEmailAndPassword(data.email, data.password)
  };

  logout(){
    this.firebaseAuthObject.$signOut();
  }

  getLogedUser(){
    return firebaseAuthObject.$getAuth();
  }

  registerNormal(data, cb, cberror){
    this.firebaseAuthObject.$createUserWithEmailAndPassword(data.email, data.password)
      .catch(cberror)  /* errror */
      .then((s) => {  /* success */
        if(!s) return;
        data.photoURL = 'http://i65.tinypic.com/3wy9h.jpg'
        s.updateProfile({
          displayName: data.name,
          photoURL: data.photoURL
        }).then(function(res){ console.log(res) })
        this.saveInfoUser(data, s.uid, 'password')
        if(cb) cb(s);
      });
  };

  googleAccess(cb, cberror){
    this.firebaseAuthObject.$signInWithPopup(this.GGprovider)
    .then((result) => {
      /* success */
      let data = {};
      data.name = result.user.email;
      data.email = result.user.providerData[0].displayName;
      data.photoURL = result.user.providerData[0].photoURL;
      let type = result.user.providerData[0].providerId;

      this.saveInfoUser(data, result.user.uid, type);
      cb(result.user);
    })
    .catch(cberror); /* error */
  };

  facebookAccess(cb, cberror){
    this.firebaseAuthObject.$signInWithPopup(this.Fprovider)
      .then((result) => {
        console.log(result);
        /* success */
        let data = {};
        data.name = result.user.email;
        data.email = result.user.providerData[0].displayName;
        data.photoURL = result.user.providerData[0].photoURL;
        let type = result.user.providerData[0].providerId;

        this.saveInfoUser(data, result.user.uid, type);
        cb(result.user);
      })
      .catch(cberror); /* error */
  }

  saveInfoUser(data, uid, type){
    firebase.database().ref('users/'+uid).set({
      name: data.name,
      email: data.email,
      photoURL: data.photoURL,
      type: type
    }) 
  };
}

angular.module('app.auth').service('LoginService', LoginService); 
