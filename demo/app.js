(function () {
    'use strict';
    var myApp = angular.module('image_slider_demo', ['image_slider']);

    var myController = function ($scope) {
        $scope.msg = 'hello everyone';
    };
    myApp.controller('sliderController', ['$scope', myController]);

})();
