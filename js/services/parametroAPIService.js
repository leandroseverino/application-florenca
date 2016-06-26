angular.module("appSite").factory("parametroAPI", ["$http", "config", function($http, config) {
    var _getParametros = function () {
        return $http.get(config.baseUrl + "/api/parametros");
    };

    return {
        getParametros: _getParametros
    };
}]);
