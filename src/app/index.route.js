export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/dashboard', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    })
    .when('/details/:guid', {
      templateUrl: 'app/details/details.html',
      controller: 'DetailsController',
      controllerAs: 'details'
    })
    .otherwise({
      redirectTo: '/'
    });
}
