angular.module("appSite").factory("imovelLocacaoAPI", ["$http", "config", function($http, config) {
    var _getImoveis = function (tipo) {
        return $http.get(config.baseUrl + "/api/imoveis_locacao/" + tipo);
    };

    return {
        getImoveis: _getImoveis
    };
}]);
