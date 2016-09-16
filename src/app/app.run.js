angular.module('app')
  .run(['$rootScope', '$location', 'LoginService',
    function ($rootScope, $location, LoginService) {

      $rootScope.loginUser = {};

      /**
       * redirect URL
       *
       * @param {string} state url state target
       */
      $rootScope.goTo = (url) => {
        $location.path(url); 
      };

      $rootScope.logout = () => {
        console.log('exit...');
        LoginService.logout();
      };

      function checkAccess(list) {
        return list.indexOf( $location.path() ) !== -1;
      }

      LoginService.firebaseAuthObject.$onAuthStateChanged((authData) => {
        $rootScope.loginUser = authData;
        console.info('user loged', $rootScope.loginUser);

        let paths = ['/register', '/login']
        let auth = ['/events/new']

        /* if authenticated and login or register  */
        if( authData && checkAccess(paths) ){
          $location.path('/events');
        }
        /* if dont authenticated and try urls protected */
        if( !authData && checkAccess(auth) ){
          $location.path('/login');
        }
      });

}]);
