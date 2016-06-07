angular.module("homeSite").factory("parametroAPI", function($http, config) {
    var _getParametros = function () {
        return $http.get(config.baseUrl + "/parametros");
    };

    return {
        getParametros: _getParametros
    };
});

