(function() {
  'use strict';
  angular.module('AngularApp')
    .controller('ExhibitController', ExhibitController);

  function ExhibitController() {
    var app = this;
    app.url = "http://4.bp.blogspot.com/--e_BDE_jjKQ/VdtAbTHozTI/AAAAAAAAHsI/bGdPlHsDlZQ/s1600/Sargent_DIGITAL_Hero.jpg";
    app.title = "Sargent Portraits of Artists & Friends";
    app.author = "John Sargent";
  }

})();
