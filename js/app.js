$( document ).ready(function() {
        
    $(window).on('load scroll', function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('scrolled');
        }else{
            $('header').removeClass('scrolled');
        }
    });

        //swiper
        var mySwiper = new Swiper ('.swiper-container', {
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            keyboard: {
              enabled: true,
            },
            pagination: {
              el: '.swiper-pagination',
                dynamicBullets: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })

    $(".page").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });     

    });
