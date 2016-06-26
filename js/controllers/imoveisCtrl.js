angular.module("appSite").controller("imoveisCtrl", ["$scope", "finalidade", "tipo", "imoveis", function ($scope, finalidade, tipo, imoveis) {
    // Generic home page of website messages:
    $scope.finalidadeImovel = finalidade;
    $scope.tipoImovel = tipo;
    $scope.imoveis = imoveis.data;
}]);
