angular.module("appSite").controller("imoveisCtrl", function ($scope, finalidade, tipo) {
    // Generic home page of website messages:
    $scope.finalidadeImovel = finalidade;
    $scope.tipoImovel = tipo;
});
