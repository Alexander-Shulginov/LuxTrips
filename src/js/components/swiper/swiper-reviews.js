/* eslint-disable no-unused-expressions */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { typeText } from '../../main';

const animElems = document.querySelectorAll('.reviews__typed-wrap');
const textElems = document.querySelectorAll('.reviews__item');

function hideTypeAnimation(num) {
	if (animElems.length === 0) return;
	animElems[num].classList.add('hidden');
	if (textElems.length === 0) return;
	textElems[num].classList.add('show');
}

const swiperReviews = new Swiper('.swiper-reviews', {
	modules: [Navigation, Pagination],
	loop: true,
	speed: 800,
	spaceBetween: 16,
	slidesPerView: 1.1,
	breakpoints: {
		768: {
			slidesPerView: 1.4,
			spaceBetween: 44,
		},
		1024: {
			spaceBetween: 94,
			slidesPerView: 1.8,
		},
		1440: {
			slidesPerView: 2,
		},
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	on: {
		slideChangeTransitionEnd: () => {
			hideTypeAnimation(swiperReviews.realIndex);
			typeText(swiperReviews.realIndex + 1);
		},
	},
});

export default swiperReviews;
