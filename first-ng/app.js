(function() {
'use strict';

  angular.module('myApp', [])
    .controller('MainController', function() {
      // Set a variable to the controller instance - "this" would change in callbacks...
      var vm = this;

       // Data and methods "attached" to vm are
       // accessible to bind to in the view.
      vm.greeting = 'AngularJS, the Superheroic MVW Framework';
      vm.crazyColor = 'orange';

      vm.title = 'AngularJS, the Superheroic MVW Framework';
      vm.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];
      vm.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];
      // toggle boolean to show/hide names
      vm.showNames = true;
      vm.addName = function() {
        if (vm.extraNames.length) vm.names.push(vm.extraNames.shift());
      };

      vm.gem1 = {
        name: 'Ruby',
        price: 99.95,
        desc: 'Red rock',
        canPurchase: true,
        soldOut: false
      };
      vm.gem2 = {
        name: 'Emerald',
        price: 99.95,
        desc: 'Green rock',
        canPurchase: true,
        soldOut: false
      };
      vm.gemsOfImagination = [vm.gem1, vm.gem2];
      vm.addCart = (gem)=>{
        console.log('this',gem)
        let index = vm.gemsOfImagination.findIndex((search)=>{
          search.name===gem.name;
        });
        vm.gemOfImagination[index].soldOut = true;
      }
    });

})();
