(function () {
    'use strict';
    var template1Ctrl = function ($scope) {
        $scope.name = 'varun';
    };
    angular.module('image_slider')
        .controller('template1', ['$scope', template1Ctrl]);
})();
