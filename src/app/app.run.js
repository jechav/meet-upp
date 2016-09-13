angular.module('app')
  .run(['$rootScope', '$location',
    function ($rootScope, $location) {

    /*
     * Escucha los cambios en la url para verificar 
     * permisos de usuario 
     */
    //$rootScope.$on('$stateChangeStart', (event, next) => {
      //if (next.url !== '/login'){
        //if(!Session.isAuthenticated()){
          //logout(); 
        //} 
      //}
      //if (next.external) {
        //event.preventDefault();
        //$window.open(next.url, '_blank');
      //}
    //});


    /**
     * redirect URL
     *
     * @param {string} state url state target
     */
    //$rootScope.goTo = state => { $state.go(state) };
      //
      $rootScope.goTo = (url) => {
        $location.path(url); 
      };

}]);
