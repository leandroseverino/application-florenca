angular.module("appSite").factory("detalhesImovelAPI", ["$http", "config", function($http, config) {
    var _getImovel = function (slug) {
        return $http.get(config.baseUrl + "/api/imovel/" + slug);
    };

    var _getImoveisRelacionados = function (slug) {
        return $http.get(config.baseUrl + "/api/imoveis-relacionados/" + slug);
    };

    return {
        getImovel: _getImovel,
        getImoveisRelacionados: _getImoveisRelacionados
    };
}]);
