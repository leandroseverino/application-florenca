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

    $scope.myModel = {
              Url: 'http://www.imobiliariaflorenca.com.br/#/detalhe-imovel/' + $scope.imovel.slug,
              Name: "Detalhes do imóvel: " + $scope.imovel.codigo, 
              ImageUrl: 'http://www.imobiliariaflorenca.com.br/website/media/imovel_recurso/img_default.png'
    };

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
