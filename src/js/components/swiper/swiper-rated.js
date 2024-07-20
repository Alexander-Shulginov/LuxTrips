import Swiper from 'swiper';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';

export default new Swiper('.swiper-rated', {
	modules: [Navigation, Pagination, EffectCreative],

	loop: true,
	speed: 1000,
	// initialSlide: 6,
	slidesPerView: 1.1,
	centeredSlides: true,

	effect: 'creative',
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ['-49%', 0, -130],
			rotate: [0, -4, 0],
		},
		next: {
			shadow: true,
			translate: ['49%', 0, -130],
			rotate: [0, 4, 0],
		},

		limitProgress: 3,
		progressMultiplier: 2,
	},

	breakpoints: {
		550: {
			slidesPerView: 1.8,
		},

		850: {
			slidesPerView: 2.4,
		},

		1024: {
			slidesPerView: 3.1,

		},
	},

	navigation: {
		nextEl: '.swiper-button-next.place__nav',
		prevEl: '.swiper-button-prev.place__nav',
	},

	on: {
		resize() {
			this.update();
		},
	},
});
