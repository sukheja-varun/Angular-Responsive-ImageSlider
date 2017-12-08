(function () {
    'use strict';
    var myApp = angular.module('image_slider_demo', ['image_slider']);

    var myController = function ($scope) {
        $scope.msg = 'hello everyone';

        $scope.imgData = [
            {
                imageUrl: 'https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }, {
                imageUrl: 'https://lorempixel.com/580/250/nature/2',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }, {
                imageUrl: 'https://lorempixel.com/580/250/nature/3',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }, {
                imageUrl: 'https://lorempixel.com/580/250/nature/4',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }

        ];

        $scope.options = {
            textAlign: 'center-align', // values: 'left-align'|'right-align'|'center-align'
            //below options are from materializecss slider
            indicators: true,
            height: 400,
            duration: 200,
            interval: 4000
        };


    };
    myApp.controller('sliderController', ['$scope', myController]);

})();
