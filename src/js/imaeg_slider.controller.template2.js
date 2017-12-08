(function () {
    'use strict';
    var template2Ctrl = function ($scope) {
        var self=this;

        self.name = 'sukheja';
        $(document).ready(function(){
            $('.materialboxed').materialbox();
        });
    };
    angular.module('image_slider')
        .controller('template2', ['$scope', template2Ctrl]);
})();
