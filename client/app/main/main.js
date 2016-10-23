'use strict';

angular.module('genApplyApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('main.list', {
        url: 'list',
        templateUrl: 'app/main/list/list.html',
        controller:'ListController',
        controllerAs: 'list',
      })
      .state('main.new', {
        url: 'new',
        templateUrl: 'app/main/new/new.html',
        controller: 'NewController',

      });

  });
