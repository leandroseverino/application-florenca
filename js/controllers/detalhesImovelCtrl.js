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

    $scope.foto_destaque_path = 'http://www.imobiliariaflorenca.com.br/website/media/imovel_recurso/';
    $scope.foto_destaque =  $scope.foto_destaque_path + 'img_default.png';
    $scope.obtem_foto_destaque = function() {
        for (var i = 0; i < $scope.imovel.recursos.length; i++) {
            if ($scope.imovel.recursos[i].tipo_recurso == 'Foto') {
                var image_path = $scope.imovel.recursos[i].resource_path;
                image_path = image_path.split('/')[1];
                $scope.foto_destaque = $scope.foto_destaque_path + image_path;
                break;
            }            
        }
    }
    $scope.foto_destaque= $scope.obtem_foto_destaque();
    

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

    $scope.myModel = {
              Url: 'http://www.imobiliariaflorenca.com.br/#/detalhe-imovel/' + $scope.imovel.slug,
              Name: "Detalhes do imóvel: " + $scope.imovel.codigo, 
              ImageUrl: $scope.foto_destaque
    };
    
}]);
