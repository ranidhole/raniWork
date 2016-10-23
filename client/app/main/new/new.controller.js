'use strict';

(function() {

  class NewController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
    });
    }
  }

  angular.module('genApplyApp')
    .component('new', {
      templateUrl: 'app/main/new/new.html',
      controller: NewController
    });

})();
