angular.module("appSite").controller("imoveisCtrl", ["$scope",
                                                     "finalidade",
                                                     "tipo",
                                                     "imoveis",
                                                     "loaded_parameters", function ($scope, finalidade, tipo, imoveis, loaded_parameters) {
    // Generic home page of website messages:
    $scope.finalidadeImovel = finalidade;
    $scope.tipoImovel = tipo;
    $scope.imoveis = imoveis.data;

    $scope.root_url;

    var _data = loaded_parameters.data;
    $scope.extrai_valores_redes_sociais = function(_data) {
        for (var i = 0; i < loaded_parameters.data.length; i++) {
            if (loaded_parameters.data[i].nome == 'root_url') {
                $scope.root_url = loaded_parameters.data[i].valor;
            }
        };
    };

    $scope.extrai_valores_redes_sociais();

}]);
