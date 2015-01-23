var myApp = angular.module('evg31337', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  //
  //if(window.history && window.history.pushState){
   $locationProvider.html5Mode(true)
  //}
 $urlRouterProvider.rule(function ($injector, $location) {
    var path = $location.url();

    // check to see if the path already has a slash where it should be
    if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
        return;
    }

    if (path.indexOf('?') > -1) {
        return path.replace('?', '/?');
    }

    return path + '/';
});

 // $urlRouterProvider.when('', '/');
 $urlRouterProvider.otherwise('404');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('hardware/', {
      url: "/hardware",
      templateUrl: "views/project_list.html"
    })
    .state('software', {
      url: "/software/",
      templateUrl: "views/project_list.html"
    })
 .state('interests', {
      url: "/interests",
      templateUrl: "views/interests.html/"
    })  
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html"
    })
    .state('misc', {
      url: "/misc",
      templateUrl: "views/misc.html",
      controller: "BlogCtrl"
    })
   .state('404', {
      url: "/404",
      templateUrl: 'views/404.html'
    });
});  


   