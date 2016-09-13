
class EventService {

  constructor($http){
    this.$http = $http;
    //this.URL = CONFIG.API_URL+'products/';
  }


  /*
   * fetch list 
   */
  getAll(callback) {
    return this.$http.get(this.URL)
    .then(callback, this.handleError);
  };

}

angular.module('app.event').service('EventService', EventService); 
