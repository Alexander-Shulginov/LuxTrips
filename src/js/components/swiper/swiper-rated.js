import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import EffectCarousel from './effect-carousel.esm';

export default new Swiper('.swiper-rated', {
	modules: [Navigation, Pagination, EffectCarousel],

	loop: true,
	speed: 1000,
	slidesPerView: 1.1,
	centeredSlides: true,
	effect: 'carousel',

	breakpoints: {
		550: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 2.3,
		},
		1024: {
			slidesPerView: 3,
		},
	},

	navigation: {
		nextEl: '.swiper-button-next.place__nav',
		prevEl: '.swiper-button-prev.place__nav',
	},

	// on: {
	// 	resize() {
	// 		this.update();
	// 	},
	// },
});
