import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

new Swiper('.swiper-packages', {
	modules: [Pagination],
	loop: true,
	slidesPerView: 3,
	width: 1000,
	breakpoints: {
		320: {
			spaceBetween: 16,
			width: 900,
		},
		768: {
			spaceBetween: 20,
			enabled: true
		},
		1025: {
			spaceBetween: 0,
			enabled: false
		},
	},

	pagination: {
		el: '.swiper-pagination-packages',
	},
});

function resetSliderPosition() {
	window.addEventListener('resize', () => {
		if (window.innerWidth > 1024) {
			document.querySelector('.packages__wrapper').removeAttribute('style');
		}
	});
}

export { Swiper, resetSliderPosition }