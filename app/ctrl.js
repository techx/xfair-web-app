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

			if(company.gsx$name.$t.toLowerCase().indexOf(searchString) !== -1 || company.gsx$majorsearch.$t.toLowerCase().indexOf(searchString) !== -1 || company.gsx$positions.$t.toLowerCase().indexOf(searchString) !== -1 || company.gsx$snippet.$t.toLowerCase().indexOf(searchString) !== -1){
				result.push(company);
			}

		});

		return result;
	};

});

app.filter('searchForprojx', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(project){

			if(project.gsx$title.$t.toLowerCase().indexOf(searchString) !== -1 || project.gsx$names.$t.toLowerCase().indexOf(searchString) !== -1 || project.gsx$snippet.$t.toLowerCase().indexOf(searchString) !== -1){
				result.push(project);
			}

		});

		return result;
	};

});

app.filter('searchFortechtalks', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(techtalk){

			if(techtalk.gsx$company.$t.toLowerCase().indexOf(searchString) !== -1 || techtalk.gsx$date.$t.toLowerCase().indexOf(searchString) !== -1 || techtalk.gsx$title.$t.toLowerCase().indexOf(searchString) !== -1 || techtalk.gsx$description.$t.toLowerCase().indexOf(searchString) !== -1){
				result.push(techtalk);
			}

		});

		return result;
	};

});

app.filter('searchForfav', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(company){

			if(company.gsx$name.$t.toLowerCase().indexOf(searchString) !== -1){
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

	$scope.favoriteList = [];
	$scope.favoriteThis = function(company){
		if ($scope.favoriteList.indexOf(company) < 0)  {
			$scope.favoriteList.push(company);
		}else{
			var index = $scope.favoriteList.indexOf(company);
			$scope.favoriteList.splice(index,1);
		};
	};

	$http.get("https://spreadsheets.google.com/feeds/list/1-fbWclJYcTkEQxPJKE1Ur8mCiDBNrLeSc53dhFVssIs/1/public/values?alt=json")
		.success(function(response) {
		$scope.techtalks = response.feed.entry;
	});

	$http.get("https://spreadsheets.google.com/feeds/list/1fh7Vrx3O-vTnMY5Gcmpu-qz91Y1wFx9Xf6xFnopb8Ew/1/public/values?alt=json")
		.success(function(response) {
		$scope.projects = response.feed.entry;
	});
});

app.controller('classCtrl', function($scope) {
	$scope.isClicked = false;
	$scope.clickedButton = function(){
		$scope.isClicked = !$scope.isClicked;
	};
	
});
