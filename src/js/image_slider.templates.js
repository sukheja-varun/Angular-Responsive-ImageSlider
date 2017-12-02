angular.module('temaplteCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/template1.html',
    "<h1>Hello this is template 1</h1>"
  );


  $templateCache.put('views/template2.html',
    "<h1>Hello this is template 2</h1>"
  );

}]);
