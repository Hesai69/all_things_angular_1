(function() {
  'use strict';
  // js/controllers/HomeController.js

  angular.module("IntroAngular")
    .controller("HomeController", HomeController)

  function HomeController () {
    var vm = this;
    vm.count = 10;
    vm.test = "Hello World"
  }

})();
