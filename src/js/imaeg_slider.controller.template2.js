(function () {
    'use strict';
    var template2Ctrl = function ($scope) {
        $scope.name = 'sukheja';
    };
    angular.module('image_slider')
        .controller('template2', ['$scope', template2Ctrl]);
})();
