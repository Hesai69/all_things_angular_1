(function() {
  'use strict';
  angular.module("IntroAngular")
    .controller("CarController", CarController)

    function CarController() {
      var vm = this;
      vm.test = "Cars!";
    }

})();
