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
