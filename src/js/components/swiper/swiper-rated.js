import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export default new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	loop: true,
	spaceBetween: 16,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		375: {
			slidesPerView: 1.1,
		},

		450: {
			slidesPerView: 1.3,
		},

		550: {
			slidesPerView: 1.6,
		},

		650: {
			slidesPerView: 2,
		},

		768: {
			slidesPerView: 2.5,
		},

		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},

		1200: {
			slidesPerView: 3.2,
			spaceBetween: 30,
		},

		1440: {
			slidesPerView: 4,
		},

		1740: {
			slidesPerView: 5,
		},

		2300: {
			slidesPerView: 6,
		},

		2800: {
			slidesPerView: 7,
		},
		
	},

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});