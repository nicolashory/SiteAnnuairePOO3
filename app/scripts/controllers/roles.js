'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('AddUtilRoleControler',  ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Projects.getAll(function (data) {
      $scope.projects = data;
    }, function (data) {
      alert("Impossible de charger les projets !")
    });

    Users.get($routeParams.userId, function (data) {
      var tab = new Array();
      tab[0] = data;
      $scope.utils = tab;
      $scope.utilSelected = tab[0];
    }, function (data) {
      alert("Impossible de charger l'utilisateur !");
    });

    $scope.saveData = function(){
      $scope.role.UserId = $scope.utilSelected.id;
      $scope.role.ProjectId = $scope.projSelected.id;
      Roles.add($scope.role, function(data){
        alert("Role sauvegardé pour " + $scope.utilSelected.name + " pour le projet " + $scope.projSelected.title);
        $location.path('/' + $scope.utilSelected.id + '/detailsUtil');
      }, function (data) {
        alert("Impossible d'ajouter le rôle !");
      });
    }
  }])

  .controller('AddProjetRoleControler',  ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Users.getAll(function (data) {
      $scope.utils = data;
    }, function (data) {
      alert("Impossible de charger les utilisateurs !")
    });

    Projects.get($routeParams.projId, function (data) {
      var tab = new Array();
      tab[0] = data;
      $scope.projects = tab;
      $scope.projSelected = tab[0];
    }, function (data) {
      alert("Impossible de charger le projet !");
    });

    $scope.saveData = function(){
      $scope.role.UserId = $scope.utilSelected.id;
      $scope.role.ProjectId = $scope.projSelected.id;
      Roles.add($scope.role, function(data){
        alert("Role sauvegardé pour " + $scope.utilSelected.name + " pour le projet " + $scope.projSelected.title);
        $location.path('/' + $scope.projSelected.id + '/detailsProj');
      }, function (data) {
        alert("Impossible d'ajouter le rôle !");
      });
    }
  }])
