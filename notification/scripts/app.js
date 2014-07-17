(function() {
    var $form = $('.optionsForm').get(0);
    var $message = $('#message').get(0);
    var $inputDelay = $('#delay').get(0);

    $form.addEventListener('click', function (element) {
        if (element.target.type === 'button') {
            
            var $messageType = $('.messageType:checked').get(0);
            var $position = $('.position:checked').get(0);

            $('.content').notification({
                message: $message.value || '',
                typeMessage: $messageType.value,
                position: $position.value || '',
                delay: $inputDelay.value || 0
            });
        }
    }, false);
})();