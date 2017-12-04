/* Angular-Responsive-ImageSlider - v0.0.1 - 2017-12-05 */(function () {
    'use strict';
    angular.module('image_slider', ['templateCacher'])
})();

angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/template1.html',
    "<div class=\"image-slider\">\n" +
    "    {{name}}\n" +
    "    <h1>Hello this is template 1</h1>\n" +
    "\n" +
    "    <!--<a class=\"waves-effect waves-light btn modal-trigger\" href=\"#modal1\">Modal</a>-->\n" +
    "\n" +
    "    <!--&lt;!&ndash; Modal Structure &ndash;&gt;-->\n" +
    "    <!--<div id=\"modal1\" class=\"modal\">-->\n" +
    "    <!--<div class=\"modal-content\">-->\n" +
    "    <!--<h4>Modal Header</h4>-->\n" +
    "    <!--<p>A bunch of text</p>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"modal-footer\">-->\n" +
    "    <!--<a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/template2.html',
    "<h1>Hello this is template 2</h1>\n" +
    "{{name}}"
  );

}]);

(function () {
    'use strict';
    var imageSliderDirective = function ($timeout) {
        return {
            restrict: 'E',
            scope: {},
            // bindToController: {
            //     id: '@acId',
            // },
            // replace: true,
            controller: '@',
            name:'templateId',
            // controllerAs: 'ISlider',
            templateUrl: function (elem, attrs) {
                var templateUrl;
                switch (attrs.templateId) {
                    case 'template1':
                        templateUrl = 'views/template1.html';
                        break;
                    case 'template2':
                        templateUrl = 'views/template2.html';
                        break;
                    case 'template3':
                        templateUrl = 'views/template3.html';
                        break;
                    default:
                        templateUrl = 'views/template1.html';
                        break;
                }

                // return attrs.templateUrl || 'views/template1.html';
                return templateUrl;
            },
            link: function (scope, element, attrs, formCtrl) {

            }
        };
    };

    angular.module('image_slider')
        .directive('imageSlider', ['$timeout', imageSliderDirective]);
})();

(function () {
    'use strict';
    var template1Ctrl = function ($scope) {
        $scope.name = 'varun';
    };
    angular.module('image_slider')
        .controller('template1', ['$scope', template1Ctrl]);
})();

(function () {
    'use strict';
    var template2Ctrl = function ($scope) {
        $scope.name = 'sukheja';
    };
    angular.module('image_slider')
        .controller('template2', ['$scope', template2Ctrl]);
})();
