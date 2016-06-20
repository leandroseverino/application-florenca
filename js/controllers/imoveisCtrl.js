angular.module("appSite").controller("imoveisCtrl", ["$scope", "finalidade", "tipo", function ($scope, finalidade, tipo) {
    // Generic home page of website messages:
    $scope.finalidadeImovel = finalidade;
    $scope.tipoImovel = tipo;
}]);
