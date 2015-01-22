var myApp = angular.module('evg31337', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  //
  //if(window.history && window.history.pushState){
   $locationProvider.html5Mode(true)
   //$urlRouterProvider.otherwise('/hardware');
  //}
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.when('', '/');
  //$urlRouterProvider.otherwise("/partials/404");
 // $urlRouterProvider.otherwise('404');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html"
    })
    .state('hardware', {
      url: "/hardware",
      templateUrl: "partials/project_list.html"
    })
    .state('software', {
      url: "/software",
      templateUrl: "partials/project_list.html"
    })
 .state('interests', {
      url: "/interests",
      templateUrl: "partials/interests.html"
    })  
    .state('about', {
      url: "/about",
      templateUrl: "partials/about.html",
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html"
    })
    .state('misc', {
      url: "/misc",
      templateUrl: "partials/misc.html",
      controller: "BlogCtrl"
    })
   .state('404', {
      url: "/404",
      templateUrl: 'partials/404.html'
    });
});
