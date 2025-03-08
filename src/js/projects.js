import Swiper from 'swiper';
import 'swiper/css/bundle';

const elemProjectBtnNext = document.querySelector('.swiper-project-btn-next');
const elemProjectBtnPrev = document.querySelector('.swiper-project-btn-prev');

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

elemProjectBtnNext.addEventListener('click', onBtnNext);

function onBtnNext() {
  swiper.slideNext();
}

elemProjectBtnPrev.addEventListener('click', onBtnPrev);

function onBtnPrev() {
  swiper.slidePrev();
}
