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

    Users.getAll($routeParams.userId, function (data) {
      $scope.utils = data;
    }, function (data) {
      alert('Impossible de charger l\'annuaire !')
    });

    $scope.deleteElt = function (userId) {
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

  .controller('DetailUtilControler',['$scope', '$http', '$routeParams', 'Users', 'Roles', 'Projects', function ($scope, $http, $routeParams, Users, Roles, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function (data) {
          $scope.user = data;
          var donneesProj = new Array();
          Users.getProj($routeParams.userId,
            function (data) {
              donneesProj = data;
              var donneesRoles = new Array();
              Users.getRoles($routeParams.userId,
                function(data){
                  donneesRoles = data;
                  console.log(donneesProj[0]);
                  for(var i = 0 ; i < donneesRoles.length ; ++i){
                    for(var j = 0 ; j < donneesProj.length ; ++j) {
                      if(donneesRoles[i].ProjectId === donneesProj[j].id){
                        donneesRoles[i].title = donneesProj[j].title;
                        donneesRoles[i].description = donneesProj[j].description;
                        break;
                      }
                    }
                  }
                  $scope.projects = donneesRoles;
                }, function (data) {
                  //a faire
                })
            }, function (data){
              // a faire
            })
        },
        function (data) {
          $scope.error = data;
        });
    }
  }])

  .controller('EditUtilControler', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function(data) {
          $scope.user = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

    $scope.saveData = function() {
      Users.edit($scope.user, function(data) {
          $location.path('/editedUtil');
        },
        function(data) {
          alert('L\'utilisateur n\'a pas pu être édité !');
        });
    };
  }])

