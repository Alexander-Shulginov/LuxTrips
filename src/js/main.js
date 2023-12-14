/* eslint-disable no-unused-vars */
import CustomTabs from './modules/tabs/tabs';
import CustomSelect from './modules/select/select';
import preloader from './components/preloader';
import swiper from './components/swiper/swiper-rated';
import swiperReviews from './components/swiper/swiper-reviews';
import flyingNavSlider from './components/flyingNavSlider';
import { resetSliderPosition } from './components/swiper/swiper-packages';
import burgerMenu from './components/burgerMenu';
import gsapInit from './components/gsap';
import parallaxInit from './components/parallax';
import smoothScroll from './components/smoothScroll';

const selects = document.querySelectorAll('.select');
selects.forEach((select) => new CustomSelect(select));

const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => new CustomTabs(tab, 1, 'horizontal'));

gsapInit();
preloader();
flyingNavSlider();
resetSliderPosition();
burgerMenu();
parallaxInit();

window.setTimeout(() => {
	smoothScroll();
}, 2000);
