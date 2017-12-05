(function () {
    'use strict';
    var template1Ctrl = function ($scope) {

        $(document).ready(function () {
            //     $('.slider').slider();
            var mSlider = document.querySelector('.slider');
            var instanceMSlider = new M.Slider(mSlider, self.options);
        });

        var self = this;
    };
    angular.module('image_slider')
        .controller('template1', ['$scope', template1Ctrl]);
})();
