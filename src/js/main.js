/* eslint-disable no-unused-vars */
import Typed from 'typed.js';
import CustomTabs from './modules/tabs/tabs';
import CustomSelect from './modules/select/select';

import swiperRated from './components/swiper/swiper-rated';
import swiperReviews from './components/swiper/swiper-reviews';
import swiperPackages, { resetSliderPosition } from './components/swiper/swiper-packages';

import flyingNavSlider from './components/flyingNavSlider';
import burgerMenu from './components/burgerMenu';
import gsapInit from './components/gsap';
import smoothScroll from './components/smoothScroll';
import { lazyLoadBgImg } from './components/lazyLoadBgImg';

const selects = document.querySelectorAll('.select');
selects.forEach((select) => new CustomSelect(select));
const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => new CustomTabs(tab, 1, 'horizontal'));

gsapInit();
flyingNavSlider();
resetSliderPosition();
burgerMenu();
lazyLoadBgImg();
smoothScroll();

export function typeText(index) {
	const typed = new Typed(`#typed-${index}`, {
		stringsElement: `#typed-string-${index}`,
		typeSpeed: 1,
		showCursor: false,
	});
}
