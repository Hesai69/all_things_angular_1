(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this;
    // vm.all = [
    //   {"name": "Blorp Florp McRichards", "start": 1789, "end": 1790 },
    //   {"name": "John MuscleBrain Adams", "start": 1790, "end": 1801 },
    //   {"name": "Blogpost Dorgabn", "start": 1801, "end": 1949 },
    //   {"name": "Mike", "start": 1949, "end": 1947 }
    // ];
    vm.addPresident = addPresident;
    vm.newPresident = {};
    vm.removePresident = removePresident;
    vm.uncoverPresident = uncoverPresident;
    vm.all = [];

    function getPresidents() {
      $http.get('/api/presidents')
      .then(function(response) {
        vm.all = response.data.presidents;
      }, function(err) {
        console.log('Error',err);
      });
    }

    getPresidents();

    function addPresident(){
      $http.post('/api/presidents', vm.newPresident)
        .then(function(res) {
          vm.all.push(res.data.president);
          vm.newPresident = {}
        }, function(err) {
          console.log(err);
        });
    }
    function removePresident(president) {
      console.log(`President to remove`,president)
      $http.delete(`/api/presidents/${president._id}`)
        .then(function(res) {
          console.log('President Removed')
          // vm.all.splice(vm.all.findIndex(function(pres) {
          //   return pres._id === president._id;
          // }), 1);
          getPresidents();
        });
    }
    function uncoverPresident(president) {
      $http.put(`/api/presidents/${president._id}`, {uncovered: !president.uncovered})
        .then(function(response) {
          console.log('response',response)
          // add ng-class="uncovered"
          // vm.all[vm.all.findIndex(function(pres) {
          //   return pres._id === president._id;
          // })].uncovered === true;
          getPresidents();
        })
    }
  }
})();
