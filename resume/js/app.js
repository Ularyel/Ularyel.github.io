var app = angular.module("app", ['ngResource', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templatesURL: "templates/content.template.html",
			controller: 'myCtrl'
		}).
		when('/:id', {
			templatesURL: "templates/content.template.html",
			controller: 'myCtrl',
			reloadOnSearch: false
		});

});	


app.controller("myCtrl", ['$scope', 'TextService', function($scope, TextService){
	$scope.counter = 0;

	$scope.next = function(){
		$scope.counter++;
		console.log($scope.counter);

	};

	$scope.previous = function() {
		$scope.counter--;
		console.log($scope.counter);

	};

	$scope.templatesURL = "templates/content.template.html";
	
	TextService.getText().then(function (response){
		$scope.text = response;
	});

	
}]);

app.filter('urlPrefix', function() {
    	return function(input) {
    	return '#';
	}
});

