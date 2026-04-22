import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import EffectPanorama from './panorama-effect';
import type { SwiperOptions } from 'swiper/types';

function createSwiperConfig(el: HTMLElement): SwiperOptions {
	return {
		effect: 'panorama',
		modules: [Navigation, Pagination, EffectPanorama],
		slidesPerView: 1.2,
		centeredSlides: true,
		loop: true,
		spaceBetween: 0,
		speed: 600,
		navigation: {
			nextEl: el.querySelector<HTMLElement>('.swiper-button-next') ?? undefined,
			prevEl: el.querySelector<HTMLElement>('.swiper-button-prev') ?? undefined,
		},
		pagination: {
			el: el.querySelector<HTMLElement>('.swiper-pagination') ?? undefined,
			clickable: true,
		},
		breakpoints: {
			640: { slidesPerView: 1 },
			1024: { slidesPerView: 2.5 },
			1440: { slidesPerView: 2.85},
		},
	};
}

export default function swiperRated(container: Element) {
	const buttons = container.querySelectorAll<HTMLButtonElement>('.tabs__btn');
	const panels = container.querySelectorAll<HTMLElement>('.tabs__content');

	const initialized = new Set<number>();

	function initSwiper(index: number) {
		if (initialized.has(index)) return;

		const panel = panels[index];
		const el = panel?.querySelector<HTMLElement>('.rated__container');

		if (!el) return;

		new Swiper(el, createSwiperConfig(el));

		initialized.add(index);
	}

	function activateTab(index: number) {
		buttons.forEach((b) => {
			b.classList.remove('tabs__btn--active');
			b.setAttribute('aria-selected', 'false');
		});
		panels.forEach((p) => p.classList.remove('tabs__content--visible'));

		buttons[index]?.classList.add('tabs__btn--active');
		buttons[index]?.setAttribute('aria-selected', 'true');
		panels[index]?.classList.add('tabs__content--visible');

		initSwiper(index);
	}

	buttons.forEach((btn, index) => {
		btn.addEventListener('click', () => activateTab(index));
	});

	initSwiper(0);
}
