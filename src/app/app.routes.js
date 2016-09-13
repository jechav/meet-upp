
/*
 * url routes
 */

angular.module('app') 
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise("/events");

    $routeProvider 
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

