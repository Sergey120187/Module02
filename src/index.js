import 'normalize.css'
import './index.html'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles/main.scss'

import Swiper, { Navigation, Pagination } from 'swiper';
var swiper = new Swiper(".offerSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
});

var swiper = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
});