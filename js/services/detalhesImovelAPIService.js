angular.module("appSite").factory("detalhesImovelAPI", ["$http", "config", function($http, config) {
    var _getImovel = function (slug) {
        console.log("slug : " + slug);
        return $http.get(config.baseUrl + "/api/imovel/" + slug);
    };

    return {
        getImovel: _getImovel
    };
}]);
