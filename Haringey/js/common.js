// owl carousal

$(document).ready(function () {
  var owlsection1 = $("#owl-section1");

  owlsection1.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 1,
    margin: 19,
    nav: true,
    loop: true,
    dots: true,
    dotsdata: true,
  });
});

// overlay nav

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
