$(document).ready(function() {

    // --sự kiện nút trái--
    $('.next').click(function() {

        var vitri_ht = $('.active_nut').index() + 1
        var item_next = $('.active').next()

        if (item_next.length != 0) {
            $('.active').addClass('go-left').one('webkitAnimationEnd', function() {
                $('.go-left').removeClass('active').removeClass('go-left')
            })
            item_next.addClass('active').addClass('right-go').one('webkitAnimationEnd', function() {
                $('.right-go').removeClass('right-go')
            })
            $('.slider2 ul li').removeClass('active_nut')
            $('.slider2 ul li:nth-child(' + (vitri_ht + 1) + ')').addClass('active_nut')
        } else {
            $('.active').addClass('go-left').one('webkitAnimationEnd', function() {
                $('.go-left').removeClass('active').removeClass('go-left')
            })
            $('.slider_item:first-child').addClass('active').addClass('right-go').one('webkitAnimationEnd', function() {
                $('.right-go').removeClass('right-go')
            })
            $('.slider2 ul li').removeClass('active_nut');
            $('.slider2 ul li:nth-child(1)').addClass('active_nut');
        }

    })



    // --sự kiện nút phải--
    $('.prev').click(function() {
        var vitri_ht = $('.active_nut').index() + 1
        var item_pre = $('.active').prev()
        if (item_pre.length != 0) {
            $('.active').addClass('go-right').one('webkitAnimationEnd', function() {
                $('.go-right').removeClass('active').removeClass('go-right')
            })
            item_pre.addClass('active').addClass('left-go').one('webkitAnimationEnd', function() {
                $('.left-go').removeClass('left-go')
            })
            $('.slider2 ul li').removeClass('active_nut')
            $('.slider2 ul li:nth-child(' + (vitri_ht - 1) + ')').addClass('active_nut')
        } else {
            $('.active').addClass('go-right').one('webkitAnimationEnd', function() {
                $('.go-right').removeClass('active').removeClass('go-right')
            })
            $('.slider_item:last-child').addClass('active').addClass('left-go').one('webkitAnimationEnd', function() {
                $('.left-go').removeClass('left-go')
            })
            $('.slider2 ul li').removeClass('active_nut');
            $('.slider2 ul li:nth-child(3)').addClass('active_nut');
        }

    })


    // --sự kiện phân trang--
    $('.slider2 ul li').click(function() {

        var vitri_ht = $('.active_nut').index() + 1
        var vitri = $(this).index() + 1

        $('.slider2 ul li').removeClass('active_nut')
        $(this).addClass('active_nut')
        if (vitri_ht < vitri) {
            $('.active').addClass('go-left').one('webkitAnimationEnd', function() {
                $('.go-left').removeClass('active').removeClass('go-left')
            })

            $('.slider_item:nth-child(' + vitri + ')').addClass('active').addClass('right-go').one('webkitAnimationEnd', function() {
                $('.right-go').removeClass('right-go')
            })
        } else if (vitri_ht > vitri) {
            $('.active').addClass('go-right').one('webkitAnimationEnd', function() {
                $('.go-right').removeClass('active').removeClass('go-right')
            })
            $('.slider_item:nth-child(' + vitri + ')').addClass('active').addClass('left-go').one('webkitAnimationEnd', function() {
                $('.left-go').removeClass('left-go')
            })
        }
    })

    //  --sự kiện auto chuyển trang--
    // setInterval(function() {

    //     var vitri_ht = $('.active_nut').index() + 1
    //     var item_next = $('.active').next()

    //     if (item_next.length != 0) {
    //         $('.active').addClass('go-left').one('webkitAnimationEnd', function() {
    //             $('.go-left').removeClass('active').removeClass('go-left')
    //         })
    //         item_next.addClass('active').addClass('right-go').one('webkitAnimationEnd', function() {
    //             $('.right-go').removeClass('right-go')
    //         })
    //         $('.slider2 ul li').removeClass('active_nut')
    //         $('.slider2 ul li:nth-child(' + (vitri_ht + 1) + ')').addClass('active_nut')
    //     } else {
    //         $('.active').addClass('go-left').one('webkitAnimationEnd', function() {
    //             $('.go-left').removeClass('active').removeClass('go-left')
    //         })
    //         $('.slider_item:first-child').addClass('active').addClass('right-go').one('webkitAnimationEnd', function() {
    //             $('.right-go').removeClass('right-go')
    //         })
    //         $('.slider2 ul li').removeClass('active_nut');
    //         $('.slider2 ul li:nth-child(1)').addClass('active_nut');
    //     }


    // }, 3500)


    // --sự kiện nav--
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('nav').addClass("bg_active")
        } else {
            $('nav').removeClass("bg_active")
        }
    });

    // --sự kiện back to top--
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 1200) {
            $('.back_top').fadeIn()
        } else {
            $('.back_top').fadeOut()
        }
    })

    $('.back_top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 300);
    })


    // --youtube_event--
    $('.video_1 i').click(function() {
        $('.overlay').addClass('active_ytb')
    })

    $('.ytb_close').click(function() {
        $('.overlay').removeClass('active_ytb')
    })

    // --bars_event--
    $('.bar i').click(function() {
        $('nav').slideToggle()
    })


});