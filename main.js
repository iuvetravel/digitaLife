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

  //testimonial slider
  $(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  //footer date
  const date = new Date();
  $(".copyright-date").text(date.getFullYear());
  const scroll = document.querySelector("#scroll");
  scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 900) {
      scroll.style.opacity = 1;
    } else {
      scroll.style.opacity = 0;
    }
  });
  //smooth scroll
  let link = $(".navbar-nav a.nav-link");
  link.click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
  });
});
//Scroll
const scroll = document.querySelector("#scroll");
scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 900) {
    scroll.style.opacity = 1;
  } else {
    scroll.style.opacity = 0;
  }
});
