define(
	[
		"text!../../templates/table.html",
	], 
	function(
		table
	){
    
	    return function(){
	    	return {
		    	template : table,
		    	scope : {},
		    	link : function($scope, elem, attrs){
		    		$scope.data = [];
		    		
		    		function createData(x, y, r){
	    				var arr = [];
						for(var i=0; i< r; i++){
							var z = [];
							for(var k=0; k<10; k++){
								var randomValue  = Math.floor((Math.random() * x) + y);
								z.push(randomValue);
							}
							arr.push(z);
						}
						$scope.data = arr;
					}

					createData(7, 4, 200);

					$scope.generateData = function(){
						createData(3, 1, 3000);
					}
		    	}
		    };
	    };	

	}
);