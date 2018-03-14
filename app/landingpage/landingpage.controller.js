(function() {
  angular
    .module('starlight')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController($http) {
    const vm = this
    vm.backToTop = false;
    vm.dataButton = true;

    vm.getData = function() {

      $http.get('cans.json')
        .then(results => {
          vm.cans = results.data
          vm.backToTop = true;
          vm.dataButton = false;
        })
    }

    vm.getInfo = function(can) {
      can.show = true;
    }
    vm.closeCanInfo = function(can) {
      can.show = false;
    }

  }
}());
