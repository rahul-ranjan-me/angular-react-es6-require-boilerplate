define([
		"angular", 
		"ngRoute",

		"controllers/AngularCtrl",
		"controllers/ReactCtrl",

		"es6!directives/reactDirective",
		"directives/angularDirective",

		"text!../templates/angular.html",
		"text!../templates/react.html"
	], 
	function(
		angular,
		ngRoute,

		angularCtrl,
		reactCtrl,

		reactDirective,
		angularDirective,

		angularTemplate,
		reactTemplate
	) {
		
	    var app = angular.module("demo", ["ngRoute"] )
	    	.controller('AngularCtrl', angularCtrl)
			.controller('ReactCtrl', reactCtrl)

			.directive('reactDirective', reactDirective.directive)
			.directive('angularDirective', angularDirective)

			.config(['$routeProvider', function($routeProvider) {
					$routeProvider.
						when('/Angular', {
							template: angularTemplate,
							controller: 'AngularCtrl'
						}).
						when('/React', {
							template: reactTemplate,
							controller: 'ReactCtrl'
						}).
						otherwise({
							redirectTo: '/Angular'
						});
		}]);

	    app.init = function () {
	    	angular.bootstrap(document, ['demo']);
		};

	    return app;
	}
);