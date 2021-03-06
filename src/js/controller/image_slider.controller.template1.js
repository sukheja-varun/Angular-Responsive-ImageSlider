(function () {
    'use strict';
    var template1Ctrl = function ($scope, utilities) {

        var self = this;
        self.enlargeImage = function (index) {
            self.enlargedImageIndex = index;
            $('#template1-modal').modal('open');
        };

        self.closeModal = function () {
            $('#template1-modal').modal('close');
        };

        var displayToast = function () {
            if (utilities.isDeviceMobile()) {
                Materialize.toast('Press &nbsp;<span style="border: 1px solid">&nbsp;X&nbsp;</span>&nbsp; to exit full screen', 4000);
            } else {
                Materialize.toast('Press &nbsp;<span style="border: 1px solid">&nbsp;ESC&nbsp;</span>&nbsp; to exit full screen', 4000);
            }
        };
        var destroyAllToast = function () {
            Materialize.Toast.removeAll();
        };

        $(document).ready(function () {
            $('.slider').slider(self.options);

            $('#template1-modal').modal({
                    dismissible: true, // Modal can be dismissed by clicking outside of the modal
                    opacity: .7, // Opacity of modal background
                    inDuration: 300, // Transition in duration
                    outDuration: 200, // Transition out duration
                    startingTop: '0%', // Starting top style attribute
                    endingTop: '0%', // Ending top style attribute
                    ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                        displayToast();
                    },
                    complete: function () {
                        destroyAllToast();
                    } // Callback for Modal close
                }
            );

        });
    };
    angular.module('image_slider')
        .controller('template1', ['$scope', 'utilities', template1Ctrl]);
})();
