angular.module("appSite").factory("imovelVendaAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function () {
        return $http.get(config.baseUrl + "/api/imoveis_vendas");
    };

    return {
        getImoveis: _getImoveis
    };
}]);
