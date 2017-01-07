var app = angular.module('MainApp', []);

/*
Search from
https://codepen.io/shahansha/pen/pvWJyv?editors=1010
*/

app.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(company){
			if(company.gsx$name.$t.toLowerCase().indexOf(searchString) !== -1 || company.gsx$majors.$t.toLowerCase().indexOf(searchString) !== -1 || company.gsx$positions.$t.toLowerCase().indexOf(searchString) !== -1 || company.gsx$snippet.$t.toLowerCase().indexOf(searchString) !== -1){
				result.push(company);
			}
		});
		return result;
	};
});

app.controller('Ctrl', function($scope, $http) {
	$http.get("https://spreadsheets.google.com/feeds/list/1h9qPXGp2fWQNPSnYGvruMH85sY1YCqpoE42nBRksFAo/1/public/values?alt=json")
		.success(function(response) {
		$scope.companies = response.feed.entry;
	});
});
