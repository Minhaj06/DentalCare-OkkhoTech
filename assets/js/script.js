// Sticky Navbar
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var sn = document.getElementById("stickyNav");
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    sn.style.top = "0";
  } else {
    sn.style.top = "-85px";
  }
}

// Testimonial Carousel
const teastimonialSwiper = new Swiper(".testimonialSwiper", {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    768: {
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
  spaceBetween: 30,
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
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
