(function() {

  angular
    .module('starlight')
    .config(config)

  function config($stateProvider, $locationProvider, $urlServiceProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        component: 'landingpage'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
