import Swiper from 'swiper';
import { EffectCoverflow, Navigation } from 'swiper/modules';

export default new Swiper('.swiper-rated', {
	modules: [Navigation, EffectCoverflow],

	speed: 1000,
	initialSlide: 6,
	slidesPerView: 4,
	centeredSlides: true,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1.1,
		},
		550: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 2.3,
		},
		1024: {
			slidesPerView: 2.9,
		},
		1250: {
			slidesPerView: 4,
		},
	},

	navigation: {
		nextEl: '.swiper-button-next.place__nav',
		prevEl: '.swiper-button-prev.place__nav',
	},
});
