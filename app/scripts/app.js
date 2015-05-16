'use strict';

/**
 * @ngdoc overview
 * @name gestionUsersApp
 * @description
 * # gestionUsersApp
 *
 * Main module of the application.
 */
angular
  .module('gestionUsersApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/utilisateurs', {
        templateUrl: '../views/utilisateurs/utilisateurs.html',
        controller: 'UtilControler'
      })
      .when('/projets',{
        templateUrl:'../views/projets/projets.html',
        controller: 'ProjetControler'
      })
      .when('/ajoutUtil',{
        templateUrl:'../views/utilisateurs/ajoutUtil.html',
        controller: 'AjoutUtilControler'
      })
      .when('/addProj',{
        templateUrl:'../views/projets/ajoutProj.html',
        controller: 'AjoutProjetControler'
      })
      .when('/:userId/detailsUtil',{
        templateUrl:'../views/utilisateurs/detailsUtil.html',
        controller:'DetailUtilControler'
      })
      .when('/:userId/editerUtil', {
        templateUrl:'../views/utilisateurs/editerUtil.html',
        controller:'EditUtilControler'
      })
      .when('/:projId/editerProj', {
        templateUrl:'../views/projets/editerProj.html',
        controller:'EditProjetControler'
      })
      .when('/addedUtil', {
        templateUrl:'../views/utilisateurs/addedUtil.html'
      })
      .when('/editedUtil', {
        templateUrl:'../views/utilisateurs/editedUtil.html'
      })
      .when('/:projId/detailsProj',{
        templateUrl:'../views/projets/detailsProj.html',
        controller: 'DetailProjetControler'
      })
      .when('/deletedUtil', {
        templateUrl:'../views/utilisateurs/deletedUtil.html'
      })
      .when('/addedProj', {
        templateUrl:'../views/projets/addedProj.html'
      })
      .when('/editedProj', {
        templateUrl:'../views/projets/editedProj.html'
      })
      .when('/deletedProj', {
        templateUrl:'../views/projets/deletedProj.html'
      })
      .when('/util/:userId/ajoutRoleUtil', {
        templateUrl:'../views/roles/ajoutRoleUtil.html',
        controller: 'AddUtilRoleControler'
      })
      .when('/proj/:projId/ajoutRoleProj', {
        templateUrl:'../views/roles/ajoutRoleProj.html',
        controller: 'AddProjetRoleControler'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$(document).ready(function() {
  $("#home_click").click(function() {
    $("#home_click").addClass("active");
    $("#utils_click").removeClass("active");
    $("#proojets_click").removeClass("active");
  });

  $("#utils_click").click(function() {
    $("#utils_click").addClass("active");
    $("#home_click").removeClass("active");
    $("#projets_click").removeClass("active");
  });

  $("#projets_click").click(function() {
    $("#projets_click").addClass("active");
    $("#home_click").removeClass("active");
    $("#utils_click").removeClass("active");
  });
});
