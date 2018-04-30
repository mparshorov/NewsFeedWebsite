angular.module('app', ['components'])
 
.controller('NewsUIController', function($scope, $locale, $http) {
    $scope.headlines = [];
    $http({
        method: 'GET',
        url: '/data/newsUI_data.json'
      }).then(function successCallback(response) {
          $scope.headlines = response.data.headlines;
          $scope.articles = response.data.articles;
        }, function errorCallback(response) {
          alert("Error: "+response);
        });
});