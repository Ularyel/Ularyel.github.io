'use strict';

angular.module('app')
.service('TextService', ['$http', '$q', function CompanyService($http, $q) {
    var text;
    var service = {
      getText: function() {
          var defered = $q.defer();
          if(text == undefined) {
            $http.get('text.json').then(function success(response) {
              text = response.data;
              defered.resolve(text);
            },
             function error(err) { defered.reject(err);
             alert("error"); });
           }
           else {
             defered.resolve(text);
           }
           return defered.promise;
      }
  };

  return service;
}]);