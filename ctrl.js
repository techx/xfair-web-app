var app = angular.module('MainApp', []);

app.controller('Ctrl', function($scope) {
	$scope.companies = [
		{
          name: 'Google',
          snippet: 'Machine learning',
          boothnumber: 1
        }, {
          name: 'Oracle',
          snippet: 'With more than 420,000 customers and deployments in more than 145 countries, Oracle offers a comprehensive and fully integrated stack of cloud applications, platform services, and engineered systems. ',
          boothnumber: 2
        }, {
          name: 'Facebook',
          snippet: 'Make the world more open and connected. Machine learning.',
          boothnumber: 3
        }
	];

	orderProp = 'boothnumber';
	
});