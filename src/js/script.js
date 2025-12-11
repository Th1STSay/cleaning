var swiper = new Swiper(".beforeAfterSlider", {
  slidesPerView: 1,
  spaceBetween: 30, // без відступів (щоб не було видно другого)
  centeredSlides: true,
  Loop: true, // НЕ центруємо (бо центрування показує частину сусіднього слайда)
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
});

var swiper = new Swiper(".SliderReviews", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    }, 
    576: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});


function openBurger() {
  let menu = document.querySelector(".header__navigation-menu");
  menu.classList.toggle("active");
}