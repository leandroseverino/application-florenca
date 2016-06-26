angular.module("appSite").factory("totalImovelAPI", ["$http", "config", function($http, config) {
    var _getTotalImoveis = function () {
        return $http.get(config.baseUrl + "/api/total_imoveis");
    };

    return {
        getTotalImoveis: _getTotalImoveis
    };
}]);
