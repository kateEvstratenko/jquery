(function () {
    $.extend($.expr.pseudos, {
        inView: function (e) {

            var viewTop = $(window).scrollTop();
            var viewBottom = viewTop + $(window).height();
            var viewLeft = $(window).scrollLeft();
            var viewRight = viewLeft + $(window).width();

            var elTop = $(e).offset().top;
            var elBottom = elTop + $(e).outerHeight();
            var elLeft = $(e).offset().left;
            var elRight = elLeft + $(e).outerWidth();

            var isInView = (elTop >= viewTop && elBottom <= viewBottom &&
                            elLeft >= viewLeft && elRight <= viewRight);
            return isInView;
        }
    });
}());

