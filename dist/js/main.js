//parallax
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  bg.style.top = value * 0.5 + 'px';
  moon.style.left = -value * 0.5 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
} )
//progressBar
let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
//slider
const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
