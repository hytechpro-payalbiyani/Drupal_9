$(document).ready(function () {
  var success = $("#success-stories");
  var latest = $("#latest-news");
  var trusted = $("#trusted-by");
  var fourthh = $("#fourth");
  var studyss = $("#case-study11");
  var benfits1 = $("#tab1-benefits");
  var benfits2 = $("#tab2-benefits");
  var benfits3 = $("#tab3-benefits");

  success.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
  });
  latest.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 3,
    margin: 20,
    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  trusted.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 2,
    margin: 20,
    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
  fourthh.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,

    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
    autowidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  });
  studyss.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    nav: true,
    loop: true,
    dots: false,

    dotsdata: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
  benfits1.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    nav: true,
    loop: true,
    dots: false,

    dotsdata: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });
  benfits2.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    nav: true,
    loop: true,
    dots: false,

    dotsdata: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });
  benfits3.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    nav: true,
    loop: true,
    dots: false,

    dotsdata: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $("#horizontalTab").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    closed: "accordion", // Start closed if in accordion view
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
    },
  });
  $("#verticalTab").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: true,
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementsByClassName("socialhousingsection")[0].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[1].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[2].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[3].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[4].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[0].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[1].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[2].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[3].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[4].style.zIndex = "0";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName("socialhousingsection")[0].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[1].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[2].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[3].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[4].style.zIndex =
    "10000";
  document.getElementsByClassName("owl-carousel")[0].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[1].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[2].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[3].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[4].style.zIndex = "1";
}
