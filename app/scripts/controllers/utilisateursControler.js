'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('UtilControler',  ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Users.getAll(function (data) {
      $scope.utils = data;
    }, function (data) {
      alert('Impossible de charger l\'annuaire !')
    });

    $scope.deleteUtil = function (userId) {
      Users.delete(userId, function(data){
          $location.path('/deletedUtil');
      }, function (data){
        alert('L\'utilisateur n\'a pas pu être supprimé !');
      });
    }
  }])

  .controller('AjoutUtilControler',['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users){
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Users.add($scope.user, function (data){
        $location.path('/addedUtil');
      }, function (data){
        alert('L\'utilisateur n\'a pas pu être ajouté !');
      });
    }

  }])

  .controller('DetailUtilControler',['$scope', '$http', '$routeParams', '$location','Users', 'Roles', 'Projects', function ($scope, $http, $routeParams, $location, Users, Roles, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Récupère les rôles et projets associés à l'utilisateur
    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function (data) {
          $scope.user = data;
          var projetsData = new Array();
          Users.getProj($routeParams.userId,
            function (data) {
              projetsData = data;
              var rolesData = new Array();
              Users.getRoles($routeParams.userId,
                function(data){
                  rolesData = data;
                  console.log(projetsData[0]);
                  for(var i = 0 ; i < rolesData.length ; ++i){
                    for(var j = 0 ; j < projetsData.length ; ++j) {
                      if(rolesData[i].ProjectId === projetsData[j].id){
                        rolesData[i].title = projetsData[j].title;
                        rolesData[i].description = projetsData[j].description;
                        break;
                      }
                    }
                  }
                  $scope.projects = rolesData;
                }, function (data) {
                  alert("Une erreur est survenue dans la récupération des rôles");
                })
            }, function (data){
                alert("Une erreur est survenue dans la récupération des projets");
            })
        },
        function (data) {
          $scope.error = data;
        });
    }

    //Supprime un rôle de l'utilisateur pour un projet
    $scope.deleteUtilProj = function(proj){
      Roles.delete(proj.id, function (data) {
        alert("Role supprimé pour le projet " + proj.title + ". Veuillez rafraîchir la page.");
      }, function(){
        alert("Impossible de supprimer le role !");
      })
    }
  }])

  .controller('EditUtilControler', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Récupère l'utilisateur souhaité
    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function(data) {
          $scope.user = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

    //Edite l'utilisateur et enregistre les modifications
    $scope.saveData = function() {
      Users.edit($scope.user, function(data) {
          $location.path('/editedUtil');
        },
        function(data) {
          alert('L\'utilisateur n\'a pas pu être édité !');
        });
    };
  }])

