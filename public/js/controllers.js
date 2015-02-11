myApp.controller('InterestController', function($scope) {
  $scope.titleSubtext="Supposibly I enjoy this trash..."
  $scope.interests = [
  				   {"name":"Electronics", "description":"I LOVE to take things apart and build stuff. Self taught from an early age and always wanting to learn more. Robots to Alarm systems to Spy gadgets."},
                   {"name":"Programming", "description":"Theres always somthing that can be improved in applications these days. This is why in my free time you can find me building interesting applications for Mobile,Web and Desktop."},
                   {"name":"Warhammer", "description":"FOR THE EMPEROR! Few things get you thinking like commanding an army. The races I play are the Necrons in Warhammer40K and the Skaven in Warhammer Fantasy."},
                   {"name":"Magic", "description":"Its all about the Swamps. Avid player of magic with allegience only to the powerfull life draining spells of Mono Black Decks."},
                   {"name":"Airsoft", "description":"Nothing says exercise and team-building like carrying 40lbs of gear and running for hours on end. All this while being flanked or shot at by the opposing team or even mother nature."}];
});

myApp.controller('HomeController', function($scope,$http) {
$http({method: 'GET', url: '/API_PRJ/'}).
  success(function(data, status, headers, config) {
    $scope.projects=data;
    $scope.lastItem = $scope.projects[$scope.projects.length-1];
    $scope.lastlastItem = $scope.projects[$scope.projects.length-2];
angular.forEach($scope.projects, function(item) {
  item.date = new Date(item.date).toDateString()
});
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });


});

myApp.controller('HardwareController', function($scope,$http) {
  $scope.title="Hardware";
  $scope.titleSubtext="Projects";
  $scope.catagoryFilter="Hardware";
$http({method: 'GET', url: '/API_PRJ/'}).
  success(function(data, status, headers, config) {
    $scope.projects=data;
angular.forEach($scope.projects, function(item) {
  item.date = new Date(item.date).toDateString()
});
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });
});

myApp.controller('SoftwareController', function($scope,$http) {
    $scope.title="Software";
  $scope.titleSubtext="Projects";
  $scope.catagoryFilter="Software";
$http({method: 'GET', url: '/API_PRJ/'}).
  success(function(data, status, headers, config) {
    $scope.projects=data;
angular.forEach($scope.projects, function(item) {
  item.date = new Date(item.date).toDateString()
});
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });
});

myApp.controller('Project_Item', function($scope, $stateParams,$http) {
    var id = $stateParams.id;

$http({method: 'GET', url: '/API_PRJ/'+id}).
  success(function(data, status, headers, config) {
    $scope.title=data.title;
    $scope.date=new Date(data.date).toDateString();
    $scope.titleSubtext=data.titleSubtext;
    $scope.image=data.image;
    $scope.quickDescription=data.quickDescription;
    $scope.mainText=data.mainText;
    console.log('PRJ: ', data );
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });
});