(function () {
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
