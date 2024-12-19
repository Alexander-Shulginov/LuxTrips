import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapFooter() {
	const tl = gsap.timeline();

	tl.from('.footer__decor', {
		scrollTrigger: {
			trigger: '.footer__logo',
			// start: 'center',
			// end: '150%',
			// markers: true,
		},
		opacity: 0,
		delay: 0.5,
		duration: 1.5,
	});

	tl.from('.footer__info', {
		scrollTrigger: {
			trigger: '.footer__info',
			// start: 'top',
			// end: '50%',
			// markers: true,
		},
		opacity: 0,
		delay: 0.5,
		duration: 1,
	});
}
