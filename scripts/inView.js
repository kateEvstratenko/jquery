(function () {
    $.extend($.expr.pseudos, {
        inView: function (e) {

            var viewTop = $(window).scrollTop()//координата начала видимой области
            var viewBottom = viewTop + $(window).height();//конец видимой области
            var viewLeft = $(window).scrollLeft()
            var viewRight = viewLeft + $(window).width();

            console.log(viewTop);
            console.log(viewBottom);

            var elTop = $(e).offset().top;
            var elBottom = elTop + $(e).outerHeight();
            var elLeft = $(e).offset().left;
            var elRight = elLeft + $(e).outerWidth();

            console.log(e);
            console.log(elTop)
            console.log(elBottom + '\n');

            if (elTop >= viewTop  && elBottom <= viewBottom &&
                elLeft >= viewLeft && elRight <= viewRight) {
                return true;
            }
            else {
                return false;
            }
        }
    });
}());

