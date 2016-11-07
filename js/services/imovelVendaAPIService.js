angular.module("appSite").factory("imovelVendaAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function (tipo) {
        console.log("#####################");
        console.log(tipo);
        return $http.get(config.baseUrl + "/api/imoveis_venda/" + tipo);
    };

    return {
        getImoveis: _getImoveis
    };
}]);
