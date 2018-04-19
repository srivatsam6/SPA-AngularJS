	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
	scotchApp.run(['$rootScope', function($rootScope) {
	    $rootScope.count = 0;
			$rootScope.studentlist = {"stdlist":[]};
	}]);
	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', ['$scope','$rootScope', function($scope, $rootScope) {
		// create a message to display in our view
		$scope.count = $rootScope.count;
		var jsonStr = $rootScope.studentlist;
		//var obj = JSON.parse(jsonStr);

		//$scope.firstname = "";
		$scope.myFunction = function() {
				alert("Hi "+$scope.firstname+". You have successfully registered!");
				//jsonStr['stdlist'].push({"firstname":$scope.firstname,"lastname":$scope.lastname,"sjsuid":$scope.sjsuid});
				//jsonStr = JSON.stringify(jsonStr);
			//	$rootScope.studentlist = jsonStr;
				$rootScope.count++ ;
				$scope.count = $rootScope.count;
				$scope.firstname = "";
				$scope.lastname = "";
				$scope.sjsuid = "";
    }

		$scope.message = 'Everyone come and see how good I look!';
	}]);

	scotchApp.controller('aboutController', function($scope, $rootScope) {
	//	$scope.message = $rootScope.studentlist;

	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
