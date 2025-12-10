var swiper = new Swiper(".beforeAfterSlider", {
  slidesPerView: 1,
  spaceBetween: 0, // без відступів (щоб не було видно другого)
  centeredSlides: false, // НЕ центруємо (бо центрування показує частину сусіднього слайда)
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
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
  },
});

// var swiper = new Swiper(".horizontalSwiper", {
//   direction: "horizontal",
//   slidesPerView: 3,
//   spaceBetween: 30,
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// var menuButton = document.querySelector(".burgerSwiper__content-wrapper-burger");
// var openMenu = function () {
//   swiper.slidePrev();
// };

// // Додаємо обробник події при завантаженні сторінки
// menuButton.addEventListener('click', openMenu, true);

// var swiper = new Swiper(".BurgerSwiper", {
//   slidesPerView: "auto",
//   initialSlide: 1,
//   resistanceRatio: 0,
//   slideToClickedSlide: true,
//   on: {
//     init: function () {
//       // Перевіряємо початковий стан
//       if (this.activeIndex === 0) {
//         menuButton.classList.add("cross");
//         menuButton.removeEventListener("click", openMenu, true);
//       }
//     },
//     slideChangeTransitionStart: function () {
//       var slider = this;
//       if (slider.activeIndex === 0) {
//         menuButton.classList.add("cross");
//         // required because of slideToClickedSlide
//         menuButton.removeEventListener("click", openMenu, true);
//       } else {
//         menuButton.classList.remove("cross");
//       }
//     },
//     slideChangeTransitionEnd: function () {
//       var slider = this;
//       if (slider.activeIndex === 1) {
//         menuButton.addEventListener("click", openMenu, true);
//       }
//     },
//   },
// });
