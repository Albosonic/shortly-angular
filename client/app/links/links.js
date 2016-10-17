angular.module('shortly.links', [])
.controller('LinksController', function($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getAll().then(function(resp) {
      $scope.data.links = resp;
    })
  } 
  $scope.getLinks();
});
