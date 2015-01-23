myApp.controller('InterestController', function($scope) {
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

