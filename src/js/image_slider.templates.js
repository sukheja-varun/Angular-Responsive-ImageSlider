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
