weatherApp.directive('weatherResult',function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherresult.html',
		replace: true,
		scope: {
			convertToFarenheit: '&',
			weatherDay: '=',
			convertToDate: '&',
			dateFormat: '@'
		}
	}
});