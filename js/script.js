$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
        $('.sticky__logo').show();
        $('.logo').hide();
    } else {
        $('header').removeClass("sticky");
        $('.sticky__logo').hide();
        $('.logo').show();
    }
});