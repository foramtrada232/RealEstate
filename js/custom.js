$(document).ready(function () {
   
    $('.property-slider').slick({
        dots: false,
    infinite: true,
    speed: 300,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        // autoplay: true,
        // infinite: true,
        // centerPadding: '10px',
        // autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});