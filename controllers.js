//CONTROLLER
weatherApp.controller('homeController',['$scope','$location','cityService',function($scope, $location, cityService){
    $scope.city = cityService.city;

    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path('/forecast');
    };
}]);

weatherApp.controller('forecastController',['$scope','weatherService','$routeParams','cityService',function($scope, weatherService, $routeParams, cityService){

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || 2; 

    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

    $scope.convertToFarenheit = function(degK) {
        return Math.round(degK -273);
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
}]);