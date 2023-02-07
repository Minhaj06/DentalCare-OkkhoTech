// Sticky Navbar
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var sn = document.getElementById("stickyNav");
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    sn.style.top = "0";
  } else {
    sn.style.top = "-95px";
  }
}

// Testimonial Carousel
const teastimonialSwiper = new Swiper(".testimonialSwiper", {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".testimonialSwiper .swiper-pagination",
    clickable: true,
  },
});

// Testimonial Carousel
const teamSwiper = new Swiper(".teamSwiper", {
  loop: true,
  spaceBetween: 25,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".teamSwiper .swiper-pagination",
    clickable: true,
  },
});

// Gallery Image Popup
$(document).ready(function () {
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
