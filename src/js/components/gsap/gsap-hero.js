import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultParams = {
	duration: 1.4,
	delay: 1,
};

export default function gsapHero() {
	gsap.timeline({ defaults: defaultParams })
		.from(['.hero__img-2', '.hero__subtitle'], {
			right: -550,
			opacity: 0,
		}, 0)
		.from('.hero__title', {
			left: -850,
			opacity: 0,
		}, 0)
		.from('.hero__text', {
			bottom: -150,
			opacity: 0,
		}, 0)
		.to(['.hero__img-2', '.hero__subtitle'], {
			right: 0,
			opacity: 1,
		}, 0)
		.to('.hero__img-1', {
			scale: 1.05,
			opacity: 1,
		}, 0);

	gsap.timeline({ defaults: defaultParams })
		.from('.hero__rhomb', {
			top: 45,
			scale: 0,
		}, 1.3)
		.from(['.hero__title', '.hero__subtitle'], {
			scale: 0.8,
		}, 1.3)
		.to(['.hero__title', '.hero__subtitle'], {
			scale: 1,
			opacity: 1,
		}, 1.3);
}
