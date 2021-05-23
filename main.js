$(document).ready(function () {
  //navbar toggling
  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("showNav");
  });
  //animated bar icon
  $("#navbar-toggler").click(function () {
    $(this).toggleClass("animatedNav");
  });
  //navbar background change on scroll
  $(window).scroll(function () {
    let position = $(window).scrollTop();
    if (position >= 60) {
      $(".navbar-wrapper").removeClass("container");
      $(".navbar-wrapper").addClass("fxd-navbar-wrapper");
    } else {
      $(".navbar-wrapper").addClass("container");
      $(".navbar-wrapper").removeClass("fxd-navbar-wrapper");
    }
  });
  //features slider
  $(".features-right .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  });
});
