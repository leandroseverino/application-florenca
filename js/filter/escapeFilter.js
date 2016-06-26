angular.module("appSite").filter("escapeHtml", function($sce) {
    return function(val) { 
        return $sce.trustAsHtml(val);
    };
});
