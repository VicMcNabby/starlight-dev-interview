(function() {
  angular
    .module('starlight')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController($http) {
    const vm = this

    vm.$onInit = function() {
      $http.get('cans.json')
        .then(results => {
          console.log(results);
          vm.cans = results.data
        })
    }

  }
}());
