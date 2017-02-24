(function() {
  'use strict';
  angular.module('AngularApp')
    .controller('GeneralController', GeneralController)

  function GeneralController() {
    var app = this;
    app.week = [
      {day: 'Monday', hours: '10:00 a.m.-09:00 p.m.'},
      {day: 'Tuesday', hours: '10:00 a.m.-5:30 p.m.'},
      {day: 'Wednesday', hours: }
    ];
  }
})();
