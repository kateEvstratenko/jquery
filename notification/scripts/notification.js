(function notification() {
    $.fn.notification = function (options) {

        var settings = $.extend({}, $.fn.notification.defaults, options);
        settings.delay = Number(settings.delay) || 0;

        return this.each(function () {           
            var lastNotification = $(this).find('.notification.' + settings.position).last();

            var newNotification = $('<div/>', {
                text: settings.message
            });

            var positionTop = lastNotification.position() ? Number(lastNotification.position().top + lastNotification.outerHeight(true)) : 0;

            newNotification
                .addClass('notification')
                .css({
                    'top': positionTop,
                })
                .addClass(settings.position)
                .addClass(settings.typeMessage);

            newNotification
                .appendTo(this)
                .animate({
                    opacity: "1"
                }, DEFAULT_ANIMATE_SHOW_TIME)
                .delay(settings.delay)
                .animate({
                    opacity: "0"
                }, DEFAULT_ANIMATE_HIDE_TIME);
            
            newNotification.parent().addClass('relative');
            
            _remove(this, newNotification);
        });


        function _remove(_this, newNotification) {
            var time = settings.delay + DEFAULT_ANIMATE_SHOW_TIME + DEFAULT_ANIMATE_HIDE_TIME;
            var notificationParent = newNotification.parent();

            setTimeout(function () {
                var heightNotification = newNotification.outerHeight(true);
                newNotification.remove();

                var otherNotifications = $(_this).find('.notification');

                $(_this).find('.notification.' + settings.position)
                        .offset(function (index, coord) {
                            var newCoord = {};
                            newCoord.top = coord.top - heightNotification;
                            newCoord.left = coord.left;
                            return newCoord;
                        });

                if (otherNotifications.length === 0) {
                    notificationParent.removeClass('relative');
                }

            }, time);
        }
    };

    var DEFAULT_ANIMATE_SHOW_TIME = 500;
    var DEFAULT_ANIMATE_HIDE_TIME = 500;
    
    $.fn.notification.defaults = {
        message: '',
        delay: 3000,
        position: 'left',
        typeMessage: 'success'
    };
    
})();