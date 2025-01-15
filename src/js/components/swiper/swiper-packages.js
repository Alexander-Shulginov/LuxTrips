import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiperPackages = new Swiper('.swiper-packages', {
	modules: [Pagination],
	loop: true,
	slidesPerView: 'auto',
	speed: 1000,
	breakpoints: {
		320: {
			spaceBetween: 16,
		},
		768: {
			spaceBetween: 20,
			enabled: true,
		},
		1025: {
			spaceBetween: 0,
			enabled: false,
		},
	},

	pagination: {
		el: '.swiper-pagination-packages',
	},
});

export function resetSliderPosition() {
	window.addEventListener('resize', () => {
		if (window.innerWidth > 1024) {
			document
				.querySelector('.packages__wrapper')
				.removeAttribute('style');
			document
				.querySelector('.packages__item')
				.removeAttribute('style');
		}
	});
}

export default swiperPackages;
