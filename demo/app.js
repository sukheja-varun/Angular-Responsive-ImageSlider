(function () {
    'use strict';
    var myApp = angular.module('image_slider_demo', ['image_slider']);

    var myController = function ($scope) {
        /**
         * Data and Config for template1
         */
        $scope.imgData1 = [
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
        $scope.options1 = {
            textAlign: 'center-align', // values: 'left-align'|'right-align'|'center-align'
            //below options are from materializecss slider
            indicators: true,
            height: 500, // if not given, it will take default width of 440px
            duration: 200,
            interval: 4000,
            enableZoom:true
        };
        /**
         * Data and Config for template2
         */
        $scope.imgData2 = [
            'https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg',
            'https://lorempixel.com/580/250/nature/1',
            'https://lorempixel.com/580/250/nature/2',
            'https://lorempixel.com/580/250/nature/3',
            'https://lorempixel.com/580/250/nature/4',
        ];
        $scope.options2 = {
            height: 500, // if not given, it will take default width of 400px
            width: 600, // if not given, it will take full width of 400px,
            enableZoom:true
        };


    };
    myApp.controller('sliderController', ['$scope', myController]);

})();
