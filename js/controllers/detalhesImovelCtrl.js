angular.module("appSite").controller("detalhesImovelCtrl", ["$scope", "$routeParams", "imovel", "imoveisRelacionados", function ($scope, $routeParams, imovel, imoveisRelacionado) {
    $scope.imovel = imovel.data;
    $scope.imoveisRelacionados = []; // imoveisRelacionados.data
}]);
