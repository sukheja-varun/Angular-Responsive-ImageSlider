/* Angular-Responsive-ImageSlider - v0.0.1 - 2017-12-02 */(function () {
    'use strict';
    var ImageSlider = function ($timeout) {
        return {
            restrict: 'E',
            scope: {},
            // bindToController: {
            //     id: '@acId',
            // },
            // replace: true,
            // controller: 'materialAutocompleteCntrl',
            // controllerAs: 'ISlider',
            templateUrl: 'views/template2.html',
            link: function (scope, element, attrs, formCtrl) {

            }
        };
    };

    angular.module('image_slider')
        .directive('imageSlider', ['$timeout', ImageSlider]);
})();

(function () {
    'use strict';
    angular.module('image_slider', [])
})();

angular.module('temaplteCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/template1.html',
    "<h1>Hello this is template 1</h1>"
  );


  $templateCache.put('views/template2.html',
    "<h1>Hello this is template 2</h1>"
  );

}]);
