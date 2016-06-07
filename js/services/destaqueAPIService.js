angular.module("homeSite").factory("destaqueAPI", function($http, config) {
    var _getDestaques = function () {
        return $http.get(config.baseUrl + "/destaques");
    };

    return {
        getDestaques: _getDestaques
    };
});
