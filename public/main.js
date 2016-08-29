$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var header = $('#top-header');

        if(scrollTop >= 100) {
            header.addClass('after-scroll');
        }
        else {
            header.removeClass('after-scroll');
        }
    })
})