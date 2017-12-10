angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/template1.html',
    "<div class=\"image-slider template1\">\n" +
    "    <div class=\"slider\" ng-style=\"{'width': ctrl.options.width}\">\n" +
    "        <ul class=\"slides\">\n" +
    "            <li ng-repeat=\"image in ctrl.data\">\n" +
    "                <i class=\"material-icons zoom-out-icon\" ng-click=\"ctrl.enlargeImage(image.imageUrl)\">zoom_out_map</i>\n" +
    "                <img ng-src=\"{{image.imageUrl}}\">\n" +
    "                <div class=\"caption\" ng-class=\"ctrl.options.textAlign\">\n" +
    "                    <h3>{{image.tagLine}}</h3>\n" +
    "                    <h5 class=\"light grey-text text-lighten-3\">{{image.slogan}}</h5>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div id=\"template1-modal\" class=\"modal template1-modal\">\n" +
    "        <img class=\"responsive-img enlarged-image\" ng-src=\"{{ctrl.enlargedImageUrl}}\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('views/template2.html',
    "<div class=\"image-slider template2\" ng-init=\"ctrl.init()\">\n" +
    "    <div class=\"slider\" ng-style=\"{'width': ctrl.options.width,'height':ctrl.options.height}\">\n" +
    "        <img class=\"materialboxed\"\n" +
    "             ng-style=\"{'width': ctrl.options.width,'height':ctrl.options.height}\"\n" +
    "             ng-src=\"{{ctrl.data[ctrl.currentImageIndex]}}\">\n" +
    "        <i class=\"material-icons icon-arrow_left\"\n" +
    "           ng-if=\"ctrl.displayLeftArrow\"\n" +
    "           ng-click=\"ctrl.prevImg()\">keyboard_arrow_left\n" +
    "        </i>\n" +
    "        <i class=\"material-icons icon-arrow_right\"\n" +
    "           ng-if=\"ctrl.displayRightArrow\"\n" +
    "           ng-click=\"ctrl.nextImg()\">keyboard_arrow_right\n" +
    "        </i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"
  );

}]);
