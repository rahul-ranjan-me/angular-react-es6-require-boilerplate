define([

	'angular',
	'controllers/PhoneDetailCtrl', 
	'angularMocks'
], 
function(
	angular,
	phoneDetailCtrl
) {

	describe('MyCtrl', function(){
		var scope, ctrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller(phoneDetailCtrl, { $scope: scope });
		}));

		it('should change greeting value if name value is changed', function() {
			scope.$digest();
			expect(scope.toPrint).toBe("Rahul");
		});
		
	});

});