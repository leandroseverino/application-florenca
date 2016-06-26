angular.module("appSite").factory("bannerAPI", ["$http", "config", function($http, config) {
    var _getBanners = function () {
        return $http.get(config.baseUrl + "/api/banners");
    };

    return {
        getBanners: _getBanners
    };
}]);
