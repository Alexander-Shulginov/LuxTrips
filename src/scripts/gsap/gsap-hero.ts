import { gsap } from 'gsap';

const defaultParams = {
	duration: 1.4,
};

export default function gsapHero(el: Element) {
	const q = gsap.utils.selector(el);

	gsap.timeline({ defaults: defaultParams })
		.from(q('.hero__img-2, .hero__subtitle'), {
			right: -550,
			opacity: 0,
		}, 0)
		.from(q('.hero__title'), {
			left: -850,
			opacity: 0,
		}, 0)
		.from(q('.hero__text'), {
			bottom: -150,
			opacity: 0,
		}, 0)
		.to(q('.hero__img-1'), {
			scale: 1.05,
		}, 0);

	gsap.timeline({ defaults: defaultParams })
		.from(q('.hero__rhomb'), {
			top: 45,
			scale: 0,
		}, 1.3)
		.from(q('.hero__title, .hero__subtitle'), {
			scale: 0.8,
		}, 1.3);
}
