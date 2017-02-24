(function() {
  'use strict';
  angular.module('InfamousCriminalsApp')
    .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

  function CriminalsController($http) {
    var vm = this;
    vm.criminals = [];
    vm.newCriminal = {};
    vm.addCriminal = addCriminal;
    vm.removeCriminal = removeCriminal;
    getCriminals();

    function getCriminals() {
      $http.get('/api/criminals')
        .then(function(res) {
          vm.criminals = res.data.criminals;
        }, function(err) {
          console.log(err);
        });
    }

    function addCriminal() {
      $http.post('/api/criminals', vm.newCriminal)
        .then(function(res) {
          getCriminals();
          vm.newCriminal = {};
        }, function(err) {
          console.log(err);
        });
    }
    function removeCriminal(criminal) {
      $http.delete(`/api/criminals/${criminal._id}`)
        .then(function(res) {
          getCriminals();
        }, function(err) {
          console.log(err);
        });
    }

  }

})();
