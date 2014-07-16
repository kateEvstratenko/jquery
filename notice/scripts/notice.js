(function notice() {
    $.fn.notice = function (options) {

        var DEFAULT_ANIMATE_SHOW_TIME = 500;
        var DEFAULT_ANIMATE_HIDE_TIME = 500;

        var settings = $.extend({}, $.fn.notice.defaults, options);
        settings.delay = Number(settings.delay) || 0;

        return this.each(function () {
            var lastNotice = $(this).find('.notice.' + settings.position).last();

            var newNotice = $('<div/>', {
                text: settings.message
            });

            var positionTop = lastNotice.position() ? Number(lastNotice.position().top + lastNotice.outerHeight(true)) : 0;
            
            newNotice
                .addClass('notice')
                .css({
                    'top': positionTop,
                })
                .addClass(settings.position)
                .addClass(settings.typeMessage);

            newNotice
                .appendTo(this)
                .animate({
                    opacity: "1"
                }, DEFAULT_ANIMATE_SHOW_TIME)
                .delay(settings.delay)
                .animate({
                    opacity: "0"
                }, DEFAULT_ANIMATE_HIDE_TIME);
            
            newNotice.parent().addClass('relative');
            
            _remove(this, newNotice);
        });
        
        function _remove(_this, newNotice) {
            var time = settings.delay + DEFAULT_ANIMATE_SHOW_TIME + DEFAULT_ANIMATE_HIDE_TIME;
            var noticeParent = newNotice.parent();

            setTimeout(function () {
                var heightNotice = newNotice.outerHeight(true);
                newNotice.remove();

                var otherNotices = $(_this).find('.notice');

                $(_this).find('.notice.' + settings.position)
                        .offset(function (index, coord) {
                            var newCoord = {};
                            newCoord.top = coord.top - heightNotice;
                            newCoord.left = coord.left;
                            return newCoord;
                        });

                if (otherNotices.length === 0) {
                    noticeParent.removeClass('relative');
                }

            }, time);
        }
    };

    $.fn.notice.defaults = {
        message: '',
        delay: 3000,
        position: 'left',
        typeMessage: 'success'
    };

})();