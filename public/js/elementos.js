    if ($('#back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

    $(window).scroll(function(){
      var scroll = $(window).scrollTop(),
              dh = $(document).height(),
              wh = $(window).height();
              value = (scroll / (dh-wh)) * 100;
          $('#progress').css('width', value + '%');    
    })
