
angular.module('app', 
               [
                 'ngRoute',
                 'templates',
                 'ngMaterial',
                 'ngMdIcons',
                 'ngMessages',
                 'app.auth',
                 'app.event',
                 'firebase'
               ]);

angular.module('app.auth', [])
angular.module('app.event', [])
