
/*
 * url routes
 */

angular.module('app') 
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise("/events");

    $routeProvider 
    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/register', {
      templateUrl: 'app/auth/register.html',
      controller: 'RegisterCtrl as ctrl'
    })
    .when('/events', {
      templateUrl: 'app/events/events.html',
      controller: 'EventCtrl as ctrl'
    })
    .when('/events/new', {
      templateUrl: 'app/events/events.form.html',
      controller: 'EventFormCtrl as ctrl'
    })
    .when('/events/detail', {
      templateUrl: 'app/events/events.detail.html',
      controller: 'EventDCtrl as ctrl'
    })

  }
]);

