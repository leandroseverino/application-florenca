angular.module("homeSite").factory("bannerAPI", function($http, config) {
    var _getBanners = function () {
        return $http.get(config.baseUrl + "/banners");
    };

    return {
        getBanners: _getBanners
    };
});
