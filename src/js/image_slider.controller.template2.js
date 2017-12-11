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
