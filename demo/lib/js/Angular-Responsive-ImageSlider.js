/* Angular-Responsive-ImageSlider - v0.0.1 - 2017-12-19 */(function () {
    'use strict';
    angular.module('image_slider', ['templateCacher','ngTouch'])
})();

angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('view/template1.html',
    "<div class=\"image-slider template1\">\n" +
    "    <div class=\"slider\" ng-style=\"{'width': ctrl.options.width}\">\n" +
    "        <ul class=\"slides\">\n" +
    "            <li ng-repeat=\"image in ctrl.data\">\n" +
    "                <i class=\"material-icons slider-icon zoom-out-icon\"\n" +
    "                   ng-if=\"ctrl.options.enableZoom\"\n" +
    "                   ng-click=\"ctrl.enlargeImage($index)\">zoom_out_map</i>\n" +
    "                <img ng-src=\"{{image.imageUrl}}\">\n" +
    "                <div class=\"caption\" ng-class=\"ctrl.options.textAlign\">\n" +
    "                    <h3>{{image.tagLine}}</h3>\n" +
    "                    <h5 class=\"light grey-text text-lighten-3\">{{image.slogan}}</h5>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div id=\"template1-modal\" class=\"modal template1-modal\" ng-if=\"ctrl.options.enableZoom\">\n" +
    "        <img ng-repeat=\"image in ctrl.data\"\n" +
    "             class=\"responsive-img enlarged-image\"\n" +
    "             ng-src=\"{{image.imageUrl}}\"\n" +
    "             ng-show=\"$index===ctrl.enlargedImageIndex\">\n" +
    "        <i class=\"material-icons slider-icon close-icon\" ng-click=\"ctrl.closeModal()\">close</i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('view/template2.html',
    "<div class=\"image-slider template2\" ng-init=\"ctrl.init()\">\n" +
    "    <div class=\"slider\" ng-style=\"{'width': ctrl.options.width,'height':ctrl.options.height}\">\n" +
    "\n" +
    "        <img class=\"mainImage\"\n" +
    "             ng-class=\"{'materialboxed':ctrl.options.enableZoom}\"\n" +
    "             ng-repeat=\"imageUrl in ctrl.data\"\n" +
    "             ng-show=\"$index === ctrl.currentImageIndex\"\n" +
    "             ng-src=\"{{imageUrl}}\"\n" +
    "             ng-swipe-left=\"ctrl.prevImg()\"\n" +
    "             ng-swipe-right=\"ctrl.nextImg()\"\n" +
    "             ng-style=\"{'width': ctrl.options.width,'height':ctrl.options.height}\">\n" +
    "\n" +
    "        <i class=\"material-icons slider-icon icon-arrow_left\"\n" +
    "           ng-if=\"ctrl.displayLeftArrow\"\n" +
    "           ng-click=\"ctrl.prevImg()\">keyboard_arrow_left\n" +
    "        </i>\n" +
    "        <i class=\"material-icons slider-icon icon-arrow_right\"\n" +
    "           ng-if=\"ctrl.displayRightArrow\"\n" +
    "           ng-click=\"ctrl.nextImg()\">keyboard_arrow_right\n" +
    "        </i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"
  );

}]);

(function () {
    'use strict';
    var imageSliderDirective = function ($timeout) {
        return {
            restrict: 'E',
            scope: {
            },
            bindToController: {
                id: '@',
                data:'=',
                options:'='
            },
            replace: true,
            controller: '@',
            name:'templateId',
            controllerAs: 'ctrl',
            templateUrl: function (elem, attrs) {
                var templateUrl;
                switch (attrs.templateId) {
                    case 'template1':
                        templateUrl = 'view/template1.html';
                        break;
                    case 'template2':
                        templateUrl = 'view/template2.html';
                        break;
                    case 'template3':
                        templateUrl = 'view/template3.html';
                        break;
                    default:
                        templateUrl = 'view/template1.html';
                        break;
                }
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

    var utilities = function () {


        return {
            isDeviceMobile: function () {
                if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
                    return true;
                }
                return false;
            }

        };
    };
    angular.module('image_slider')
        .factory('utilities', [utilities]);
})();

(function () {
    'use strict';
    var template1Ctrl = function ($scope, utilities) {

        var self = this;
        self.enlargeImage = function (index) {
            self.enlargedImageIndex = index;
            $('#template1-modal').modal('open');
        };

        self.closeModal = function () {
            $('#template1-modal').modal('close');
        };

        var displayToast = function () {
            if (utilities.isDeviceMobile()) {
                Materialize.toast('Press &nbsp;<span style="border: 1px solid">&nbsp;X&nbsp;</span>&nbsp; to exit full screen', 4000);
            } else {
                Materialize.toast('Press &nbsp;<span style="border: 1px solid">&nbsp;ESC&nbsp;</span>&nbsp; to exit full screen', 4000);
            }
        };
        var destroyAllToast = function () {
            Materialize.Toast.removeAll();
        };

        $(document).ready(function () {
            $('.slider').slider(self.options);

            $('#template1-modal').modal({
                    dismissible: true, // Modal can be dismissed by clicking outside of the modal
                    opacity: .7, // Opacity of modal background
                    inDuration: 300, // Transition in duration
                    outDuration: 200, // Transition out duration
                    startingTop: '0%', // Starting top style attribute
                    endingTop: '0%', // Ending top style attribute
                    ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                        displayToast();
                    },
                    complete: function () {
                        destroyAllToast();
                    } // Callback for Modal close
                }
            );

        });
    };
    angular.module('image_slider')
        .controller('template1', ['$scope', 'utilities', template1Ctrl]);
})();

(function () {
    'use strict';
    var template2Ctrl = function ($scope) {
        var self = this;

        self.init = function () {
            self.currentImageIndex = 0;
            checkArrowVisibility();
        };

        self.prevImg = function () {
            self.currentImageIndex--;
            checkArrowVisibility();
        };
        self.nextImg = function () {
            self.currentImageIndex++;
            checkArrowVisibility();
        };

        var checkArrowVisibility = function () {
            self.displayLeftArrow = self.currentImageIndex === 0 ? false : true;
            self.displayRightArrow = self.currentImageIndex === (self.data.length - 1) ? false : true;
        };

        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    angular.module('image_slider')
        .controller('template2', ['$scope', template2Ctrl]);
})();
