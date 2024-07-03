// swiper 
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    document.getElementById('btn1').onclick = function() {
      document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
    }
    document.getElementById('btn2').onclick = function() {
      document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
    }
    document.getElementById('btn3').onclick = function() {
      document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
    }