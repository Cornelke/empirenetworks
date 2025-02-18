$(document).ready(function () {
  // One Page Active
  $("#nav").onePageNav({
    currentClass: "current",
  });

  // Image Popup Active
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Video Popup Active
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // Mobile Menu Active
  $('#nav').slicknav();

  // Counter Active
  $(".counter-increment").counterUp();

  // Testimonials Slider Active
  $(".testimonials").slick({
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    dots: true,
    infinite: true,
    loop: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Sticky Header JS
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 25) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }
});
