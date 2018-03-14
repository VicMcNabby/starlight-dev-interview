(function() {
  angular
    .module('starlight')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController($http) {
    const vm = this

    vm.$onInit = function() {
      $http.get('cans.json')
        .then(results => {
          vm.cans = results.data
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
