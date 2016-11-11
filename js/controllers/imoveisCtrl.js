angular.module("appSite").controller("imoveisCtrl", ["$scope",
                                                     "imovelVendaAPI",
                                                     "finalidade",
                                                     "tipo",
                                                     "imoveis",
                                                     "loaded_parameters", function ($scope, imovelVendaAPI, finalidade, tipo, imoveis, loaded_parameters) {
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

    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.filtros_aplicados;
    $scope.imoveis_filtrados;

    $scope.submit = function(searchForm) {

        $scope.submitted = true;

        if ($scope.formData) {
            var filtros = "";
            for (var obj in $scope.formData) {
                if (obj == 'cod_imovel') {
                    filtros += "&nbsp<span style='text-transform:capitalize;'>Código = " + $scope.formData[obj] + "</span>&nbsp";
                } else if (obj == 'dorm') {
                    filtros += "&nbsp<span style='text-transform:capitalize;'>Nº Dormitórios = " + $scope.formData[obj] + "</span>&nbsp";
                } else if (obj == 'vlr_ini') {
                    var ini_vlr = parseFloat(Math.round($scope.formData[obj]  * 100) / 100).toFixed(2);
                    filtros += "&nbsp<span style='text-transform:capitalize;'>Valor Mínimo = R$ " + ini_vlr + "</span>&nbsp";
                } else if (obj == 'vlr_fim') {
                    var fim_vlr = parseFloat(Math.round($scope.formData[obj]  * 100) / 100).toFixed(2);
                    filtros += "&nbsp<span style='text-transform:capitalize;'>Valor Máximo = R$ " + fim_vlr + "</span>&nbsp";
                } else {
                    filtros += "&nbsp<span style='text-transform:capitalize;'>" + obj + " = " + $scope.formData[obj] + "</span>&nbsp";
                }
            }
            $scope.filtros_aplicados = filtros
        }

        if (searchForm.$valid && $scope.formData) {
            $scope.imoveis_filtrados = imovelVendaAPI.getImoveisSearch("?tipo=" + $scope.tipoImovel + "&" + $.param($scope.formData));
            $scope.imoveis_filtrados.success(function(data) {
                $scope.imoveis = data;
            }).error(function(err) {
                $scope.imoveis = [];
            });
        }
    }

    $scope.reset = function() {
        $scope.formData = {};
        $scope.filtros_aplicados = null;
        $scope.searchForm.$setPristine();
    };

}]);
