(function () {
    'use strict';

    var $form = $('.optionsForm').get(0);
    var $message = $('#message');
    var $inputDelay = $('#delay');

    $form.addEventListener('click', function (element) {
        if (element.target.type === 'button') {
            var $messageType = $('.messageType:checked');
            var $position = $('.position:checked');

            $('.content').notification({
                message: $message.val() || '',
                typeMessage: $messageType.val() || '',
                position: $position.val()|| '',
                delay: $inputDelay.val() || 0
            });
        }
    }, false);
})();