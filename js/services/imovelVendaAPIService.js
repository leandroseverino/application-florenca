angular.module("appSite").factory("imovelVendaAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function (tipo) {
        return $http.get(config.baseUrl + "/api/imoveis_venda/" + tipo);
    };
    var _getImoveisSearch = function (search) {
        return $http.get(config.baseUrl + "/api/imoveis_venda_search/" + search);
    };
    return {
        getImoveis: _getImoveis,
        getImoveisSearch: _getImoveisSearch
    };
}]);
