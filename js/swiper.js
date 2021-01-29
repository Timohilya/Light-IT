var swiper1 = new Swiper('.swiper1', {
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});
var swiper2 = new Swiper('.swiper2', {
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 'auto',
  breakpoints: {
     9999: {
       slidesPerView: 1,
     }
  },
  on:{
    beforeResize() {
      if (window.innerWidth >= 9999) {
        swiper.slides.css('width', '');
      }
    }
  }
});
var swiper3 = new Swiper('.swiper3', {
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});