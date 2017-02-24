(function() {
'use strict';
  angular.module('AngularApp', [])
    .controller('AngularApp', AngularApp)

  function AngularApp() {
    var vm = this;
    vm.header = "The Metropolitan Museum of Art";
  }
})();
