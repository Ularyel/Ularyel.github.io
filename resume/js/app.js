var app = angular.module("app", ['ngResource', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/:id', {
			templateUrl: "templates/content.template.html",
			controller: 'myCtrl',
			reloadOnSearch: false
		}).
		otherwise({
      		redirectTo: '/0'
    	});

}])

app.controller("myCtrl", ['$scope', 'TextService', '$routeParams', '$location', function($scope, TextService, $routeParams, $location){

	
	$scope.setCounter = function () {
		var urlStr = $location.url();
		var urlInt = parseInt(urlStr.slice(1));
		$scope.counter = urlInt ;
	};
	
	$scope.setCounter();

	$scope.$on("$routeChangeSuccess", $scope.setCounter);

	$scope.next = function(){
		$scope.counter++;
		$location.path("/" + $scope.counter);
		$scope.setCounter();

	};

	$scope.previous = function() {
		$scope.counter--;
		if ($scope.counter < 0) {
			$scope.counter = 0
		}
		$location.path("/" + $scope.counter);

	};



	TextService.getText().then(function (response){
		$scope.text = response[parseInt($routeParams.id, 10)].body;
	});




	
}]);

