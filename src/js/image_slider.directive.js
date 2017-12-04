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
