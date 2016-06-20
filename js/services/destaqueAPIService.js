angular.module("appSite").factory("destaqueAPI", ["$http", "config", function($http, config) {
    var _getDestaques = function () {
        return $http.get(config.baseUrl + "/destaques");
    };

    return {
        getDestaques: _getDestaques
    };
}]);
