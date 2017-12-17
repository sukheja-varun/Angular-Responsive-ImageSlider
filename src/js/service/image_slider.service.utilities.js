(function () {
    'use strict';

    var utilities = function () {


        return {
            isDeviceMobile: function () {
                if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
                    return true;
                }
                return false;
            }

        };
    };
    angular.module('image_slider')
        .factory('utilities', [utilities]);
})();
