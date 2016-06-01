var app = angular.module("app", ['ngResource', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/:id', {
			templateUrl: "templates/content.template.html",
			controller: 'myCtrl'
		}).
		otherwise({
      		redirectTo: '/0'
    	});

}]).run(['$routeParams', function($routeParams){
	$routeParams.id = 0

}]);


app.controller("myCtrl", ['$scope', 'TextService', '$routeParams', function($scope, TextService, $routeParams){

	
	$scope.counter = 0;


	$scope.next = function(){
		$scope.counter++;
		console.log($scope.counter);

	};

	$scope.previous = function() {
		$scope.counter--;
		if ($scope.counter < 0) {
			$scope.counter = 0
		}
		console.log($scope.counter);

	};



	TextService.getText().then(function (response){
		$scope.text = response[parseInt($routeParams.id, 10)].body;
	});




	
}]);

app.filter('urlPrefix', function() {
    	return function(input) {
    	return '#';
	}
});

