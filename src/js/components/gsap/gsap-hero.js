import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapHero() {
	// gsap.defaults({ delay: 0.2.3 });

	gsap.timeline()
		.from(['.hero__img-2', '.hero__subtitle'], {
			right: -550,
			opacity: 0,
			duration: 1.4,
			delay: 2.6,
		}, 0)
		.from('.hero__title', {
			left: -850,
			opacity: 0,
			duration: 1.4,
			delay: 2.6,
		}, 0)
		.from('.hero__text', {
			bottom: -150,
			opacity: 0,
			duration: 1.4,
			delay: 2.6,
		}, 0)
		.to(['.hero__img-2', '.hero__subtitle'], {
			right: 0,
			opacity: 1,
			duration: 1.4,
			delay: 2.6,
		}, 0)
		.to('.hero__img-1', {
			scale: 1.05,
			opacity: 1,
			duration: 1.4,
			delay: 2.6,
		}, 0)
		.to('.hero__title', {
			left: 0,
			opacity: 1,
			duration: 1.4,
			delay: 2.6,
		}, 0);

	gsap.timeline()
		.from('.hero__rhomb', {
			top: 45,
			scale: 0,
			duration: 1.4,
			delay: 2.6,
		}, 1.3)
		.from(['.hero__title', '.hero__subtitle'], {
			scale: 0.8,
			opacity: 1,
			duration: 1.4,
			delay: 2.6,
		}, 1.3)
		.to(['.hero__title', '.hero__subtitle'], {
			scale: 1,
			opacity: 1,
			duration: 1.4,
			delay: 2.6,
		}, 1.3);
}
