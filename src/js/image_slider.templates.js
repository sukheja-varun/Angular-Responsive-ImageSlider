angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/template1.html',
    "<div class=\"image-slider template1\">\n" +
    "    <rotating-plane-spinner></rotating-plane-spinner>\n" +
    "    <div class=\"slider\" valign-wrapper>\n" +
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
    "<div >\n" +
    "    <h1>Hello this is template 2</h1>\n" +
    "    {{ctrl.name}}\n" +
    "\n" +
    "\n" +
    "    <img class=\"materialboxed\" width=\"650\" src=\"https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg\">\n" +
    "</div>"
  );

}]);
