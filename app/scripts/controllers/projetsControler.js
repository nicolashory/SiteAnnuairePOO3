'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('ProjetControler',  ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
     ];

    Projects.getAll(function (data) {
      $scope.projects = data;
    }, function (data) {
      alert('Impossible de charger les projets !');
    });

    $scope.deleteProj = function (projId) {
      Projects.delete(projId, function(data){
        $location.path('/deletedProj');
      }, function (data){
        alert('Le projet n\'a pas pu être supprimé !');
      });
    }

  }])
  .controller('AjoutProjetControler',  ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Projects.add($scope.project, function (data){
        $location.path('/addedProj')
      }, function (data){
        alert('Le projet n\'a pas pu être ajouté !');
      });
    }
  }])

  .controller('EditProjetControler',['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projId) {
      Projects.get($routeParams.projId,
        function(data) {
          $scope.project = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

    $scope.saveData = function () {
      Projects.edit($scope.project, function (data){
        $location.path('/editedProj');
      }, function (data){
        alert('Le projet n\'a pas pu être édité !');
      });
    }
  }])

  .controller('DetailProjetControler',['$scope', '$http', '$routeParams', '$location', 'Users', 'Roles', 'Projects', function ($scope, $http, $routeParams, $location, Users, Roles, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projId) {
      $scope.users = new Array();
      Projects.get($routeParams.projId,
        function (data) {
          $scope.proj = data;
          var utilsData = new Array();
          Projects.getUtil($routeParams.projId,
            function (data) {
              utilsData = data;
              var rolesData = new Array();
              Projects.getRoles($routeParams.projId,
                function (data) {
                  rolesData = data;
                  for(var i = 0 ; i < rolesData.length ; ++i){
                    for(var j = 0 ; j < utilsData.length ; ++j){
                      if(rolesData[i].UserId === utilsData[j].id){
                        rolesData[i].surname = utilsData[j].surname;
                        rolesData[i].prenom = utilsData[j].name;
                        break;
                      }
                    }
                  }
                  $scope.users = rolesData;

                }, function (data) {
                  alert("Impossible de charger les rôles !");
                });
            },
            function (data) {
              alert("Impossible de charger les utilisateurs !");
            });

        },
        function (data) {
          alert("Impossible de charger les projets !");

        });
    }

    $scope.deleteRoleUser = function(user){
      Roles.delete(user.id, function (data) {
        alert("Le rôle a bien été supprimé pour l'utilisateur " + user.surname + ". Veuillez rafraîchir la page.");
      }, function(){
        alert("Impossible de supprimer le role");
      })
    }
  }])

