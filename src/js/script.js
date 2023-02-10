
$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.svg"></button>',
        speed: 1200,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });
