angular.module("appSite").factory("imovelAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function (operacao, tipo) {
        return $http.get(config.baseUrl + "/api/imoveis_" + operacao + "/" + tipo);
    };
    var _getImoveisSearch = function (operacao, search) {
        return $http.get(config.baseUrl + "/api/imoveis_"+ operacao + "_search/" + search);
    };
    return {
        getImoveis: _getImoveis,
        getImoveisSearch: _getImoveisSearch
    };
}]);
