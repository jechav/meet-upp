

class EventFormCtrl{

  constructor(EventService) {
    console.info('hello form');
  }
}

angular.module('app.event').controller('EventFormCtrl', EventFormCtrl);
