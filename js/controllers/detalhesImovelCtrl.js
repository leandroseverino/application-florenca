angular.module("appSite").controller("detalhesImovelCtrl", ["$scope", "$routeParams", "imovel", "imoveisRelacionados", function ($scope, $routeParams, imovel, imoveisRelacionados) {
    $scope.imovel = imovel.data;
    $scope.imoveisRelacionados = imoveisRelacionados.data;
}]);
