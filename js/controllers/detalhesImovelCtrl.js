angular.module("appSite").controller("detalhesImovelCtrl", ["$scope",
                                                            "$routeParams",
                                                            "loaded_parameters",
                                                            "imovel",
                                                            "imoveisRelacionados", function ($scope,
                                                                                             $routeParams,
                                                                                             loaded_parameters,
                                                                                             imovel,
                                                                                             imoveisRelacionados) {
    $scope.imovel = imovel.data;
    $scope.root_url;

    var _data = loaded_parameters.data;
    $scope.extract_root_url = function(_data) {
        for (var i = 0; i < loaded_parameters.data.length; i++) {
            if (loaded_parameters.data[i].nome == 'root_url') {
                $scope.root_url = loaded_parameters.data[i].valor;
            }
        };
    };

    $scope.extract_root_url();

    $scope.imoveisRelacionados = imoveisRelacionados.data;

}]);
