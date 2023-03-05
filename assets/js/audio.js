var testimonialCarousel = function () {
  var owl = $(".owl-carousel-fullwidth");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: true,
    smartSpeed: 800,
    autoHeight: true,
  });
};
