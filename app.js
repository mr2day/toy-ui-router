'use strict';

angular.module('main', ['ngMaterial', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/rahan');

    $stateProvider
      .state('rahan', {
        url: "/rahan",
        template: "<rahan></rahan>"
      })
      .state('batman', {
        url: "/batman",
        template: "<batman></batman>"
      })
      .state('superman', {
        url: "/superman",
        template: "<superman></superman>"
      });
  })
  .component('main', {
    templateUrl: "./main.html"
  })
  .component('rahan', {
    templateUrl: "./rahan.html"
  })
  .component('batman', {
    templateUrl: "./batman.html"
  })
  .component('superman', {
    templateUrl: "./superman.html"
  });
