angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('view/template1.html',
    "<div class=\"image-slider template1\">\n" +
    "    <div class=\"slider\" ng-style=\"{'width': ctrl.options.width}\">\n" +
    "        <ul class=\"slides\">\n" +
    "            <li ng-repeat=\"image in ctrl.data\">\n" +
    "                <i class=\"material-icons slider-icon zoom-out-icon\" ng-click=\"ctrl.enlargeImage($index)\">zoom_out_map</i>\n" +
    "                <img ng-src=\"{{image.imageUrl}}\">\n" +
    "                <div class=\"caption\" ng-class=\"ctrl.options.textAlign\">\n" +
    "                    <h3>{{image.tagLine}}</h3>\n" +
    "                    <h5 class=\"light grey-text text-lighten-3\">{{image.slogan}}</h5>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div id=\"template1-modal\" class=\"modal template1-modal\">\n" +
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
    "        <img class=\"materialboxed mainImage\"\n" +
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
