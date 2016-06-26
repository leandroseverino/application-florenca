angular.module("appSite").factory("imovelLocacaoAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function () {
        return $http.get(config.baseUrl + "/api/imoveis_locacao");
    };

    return {
        getImoveis: _getImoveis
    };
}]);
