myApp.controller('InterestController', function($scope) {
  $scope.titleSubtext="Supposibly I enjoy this trash..."
  $scope.interests = [
  				   {"name":"Electronics", "description":"I like to build and take apart stuff."},
                   {"name":"Programming", "description":"I enjoy the programming"},
                   {"name":"Warhammer", "description":"FOR THE EMPEROR"},
                   {"name":"Magic", "description":"swamp 4 lyfe"},
                   {"name":"Airsoft", "description":"pew pew milsim"}];
});

myApp.controller('AboutController', function($scope) {
	$scope.descriptionTitle="Colinious Maximus the first"
	$scope.image="http://placehold.it/750x450"
	$scope.description="Heyo"
  $scope.friends = [
  				   {"name":"DenoSaauur", "company":"Lyninx inc." ,"description":"Herp Derp.","website":"http://www.google.ca","image":"http://placehold.it/750x450"},
                   {"name":"Tobeans","company":"BadApps inc.", "description":"Hey Baus","website":"http://www.google.ca","image":"http://placehold.it/750x450"},
                   {"name":"NoBody","company":"Somtin inc.", "description":"montindeeew","website":"http://www.google.ca","image":"http://placehold.it/750x450"}
                   ];
});

myApp.controller('HardwareController', function($scope) {
	$scope.title="Hardware"
		$scope.titleSubtext="Heyo robots"
  $scope.projects = [
  				   {"name":"Prohect 1", "date":"May 24, 2013" ,"description":"sdfsdfsdfsdf","id":"0","image":"http://placehold.it/600x300"},
                   {"name":"electonic thing","date":"May 24, 2013", "description":"ergsergserger","id":"2","image":"http://placehold.it/600x300"}
                   ];
});

myApp.controller('SoftwareController', function($scope) {
	$scope.title="Software"
		$scope.titleSubtext="Heyo bugs"
  $scope.projects = [
  				   {"name":"some program", "date":"May 24, 2013" ,"description":"sdfsdfsdfsdf","id":"0","image":"http://placehold.it/600x300"},
                   {"name":"calculation software","date":"May 24, 2013", "description":"ergsergserger","id":"2","image":"http://placehold.it/600x300"}
                   ];
});

myApp.controller('Project_Item', function($scope, $stateParams) {
//Get variables from previous page routed parameters
    var category = $stateParams.id;


	$scope.title="Project Name"
	$scope.date="August 24, 2013 at 9:00 PM "
	$scope.titleSubtext="It Beeps"
	$scope.image="http://placehold.it/900x300"
	$scope.quickDescription="Some quick Desc"
	$scope.mainText="Dis how i built"
 
 $scope.links = [
  			        {"text":"some url","url":"http://placehold.it/600x300"},
                    {"text":"some other url","url":"http://placehold.it/600x300"},
					{"text":"once again","url":"http://placehold.it/600x300"}
                  ];
});