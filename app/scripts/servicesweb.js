'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.service:UserServ
 * @description
 * # UserServ
 * Service of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .service('Users', ['$http', function Users($http) {
    //select all users
    this.getAll = function (successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    //ajouter un utilisateur
    this.add = function(user, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', user)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //supprimer un utilisateur grâce à son id
    this.delete = function(userId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer un utilisateur grâce à son id
    this.get = function(userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //éditer un utilisateur grâce à son id
    this.edit = function(user, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ user.id, user)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

      //récupérer les projets d'un utilisateur grâce à son id
    this.getProj = function(userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId + '/Projects/')
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer les rôles d'un utilisateur grâce à son id
    this.getRoles = function(userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId + '/Roles/')
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
  }])

  .service('Roles',  ['$http', function Roles($http) {

    //récupérer un role grâce à son id
    this.get = function (roleId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + roleId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer tous les rôles d'un utilisateur
    this.getByUser = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer tous les roles d'un projet
    this.getByProject = function (projId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //ajouter un rôle
    this.add = function(role, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //ajouter un rôle à un projet
    this.addRole = function(projId, userId, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId + '/Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //éditer un rôle - Non utilisé, supprimer puis rajouter
    this.edit = function(role, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + role.id, role)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //supprimer un role grâce à son id
    this.delete = function(roleId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + roleId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
  }])

  .service('Projects',  ['$http', function Projects($http) {
    //récupérer un projet grâce à son id
    this.get = function (projetId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projetId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer les participants d'un projet
    this.getUtil = function (projetId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projetId + '/Users/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer les rôles d'un projet
    this.getRoles = function (projetId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projetId + '/Roles/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //récupérer tous les projets
    this.getAll = function (successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    //ajouter un projet
    this.add = function(project, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', project)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //supprimer un projet
    this.delete = function(projId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ projId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //editer un projet
    this.edit = function(proj, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ proj.id, proj)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

  }])
