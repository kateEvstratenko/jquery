(function () {
    'use strict';

    $.extend($.expr.pseudos, {
        inView: function (element) {

            var objectWindow = window;

            var viewTop = $(objectWindow).scrollTop();
            var viewBottom = viewTop + $(objectWindow).height();
            var viewLeft = $(objectWindow).scrollLeft();
            var viewRight = viewLeft + $(objectWindow).width();

            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).outerHeight();
            var elementLeft = $(element).offset().left;
            var elementRight = elementLeft + $(element).outerWidth();

            var isInView = elementTop >= viewTop && elementBottom <= viewBottom &&
                            elementLeft >= viewLeft && elementRight <= viewRight;
            return isInView;
        }
    });
}());

