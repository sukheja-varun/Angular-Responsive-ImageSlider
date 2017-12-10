(function () {
    'use strict';
    var template2Ctrl = function ($scope) {
        var self = this;

        self.init = function () {
            self.mainImage = 'https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg';
            self.options = self.options || {};
            self.options.width = self.options.width || 400;
            self.options.height = self.options.height || 400;
        };

        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    angular.module('image_slider')
        .controller('template2', ['$scope', template2Ctrl]);
})();
