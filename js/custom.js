$(document).ready(function () {

  // Change back ground color on scroll position
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 100) {
      $("header").css('background-color', 'black');
    }
    else {
      $("header").css('background-color', 'rgba(0,0,0,0.6)');
    }
  });

  $(function () {
    $('#searchlink').on('click', function (e) {
      $(this).toggleClass('open');
    });
  });

  $('.property-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
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
      }
    ]
  });
  $('.trending-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
})



