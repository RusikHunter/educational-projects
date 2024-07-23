import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let _swiper = document.querySelector('.swiper');

const swiper = new Swiper(_swiper, {
    slidesPerView: 11,
    loop: true,
});