angular.module('appSite', ['angulike'])
  .run([
      '$rootScope', function ($rootScope) {
          $rootScope.facebookAppId = '[229245207187701]'; // set your facebook app id here
      }
  ]);
