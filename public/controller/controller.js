var myApp=angular.module('myApp',[]);
myApp.controller('appcontroller',function($scope,$http){
	$scope.CountryDatajson="";
	console.log('hello from appcontroller');
	$scope.regions=['Asia','Europe','Africa','Americas','Oceania'];
	$scope.showSelectValue = function(selectedRegion) {
    console.log(selectedRegion);
	}
	
	$scope.myFunction = function() {
		
		if($scope.selectedRegion==undefined){
			alert("please select region");
		}
    
		var response = $http.get('/countrieslist',{
                params:{region: $scope.selectedRegion},
            });
		

        response.success(function(data, status, headers, config) {

          $scope.CountryDatajson = data;

        });

        response.error(function(data, status, headers, config) {
		alert("Error.");});
	}
	
	

});