var app = angular.module('MainApp', []);

app.controller('Ctrl', function($scope, $http) {

	orderProp = 'boothnumber';
	
	$http.get("https://spreadsheets.google.com/feeds/list/1h9qPXGp2fWQNPSnYGvruMH85sY1YCqpoE42nBRksFAo/1/public/values?alt=json")
        .success(function(response) {
		$scope.companies = response.feed.entry;
	});
});
