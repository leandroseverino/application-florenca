angular.module("appSite").controller("detalhesImovelCtrl", ["$scope", "$routeParams", "imovel", function ($scope, $routeParams, imovel) {
    // Generic home page of website messages:
    $scope.imovel = imovel.data;
}]);
