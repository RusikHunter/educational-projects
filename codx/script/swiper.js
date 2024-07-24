import Swiper from '../node_modules/swiper';
import '../node_modules/swiper/css';

let _swiper = document.querySelector('.swiper');

const swiper = new Swiper(_swiper, {
    slidesPerView: 11,
    loop: true,
});