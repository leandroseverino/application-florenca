angular.module("appSite").factory("imovelLocacaoAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function (tipo) {
        return $http.get(config.baseUrl + "/api/imoveis_locacao/" + tipo);
    };
    var _getImoveisSearch = function (search) {
        return $http.get(config.baseUrl + "/api/imoveis_locacao_search/" + search);
    };
    return {
        getImoveis: _getImoveis,
        getImoveisSearch: _getImoveisSearch
    };
}]);
