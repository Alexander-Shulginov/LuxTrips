import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper-reviews", {
	modules: [Navigation, Pagination],
	loop: true,
	spaceBetween: 16,
	slidesPerView: 1,
	breakpoints: {
		1024: {
			spaceBetween: 94,
			slidesPerView: 1.8,
		},
	},

	pagination: {
		el: ".swiper-pagination-reviews",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
