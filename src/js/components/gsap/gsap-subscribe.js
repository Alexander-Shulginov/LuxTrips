import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapSubscribe() {
	const elements = document.querySelectorAll('.subscribe__title--text');

	gsap.from('.subscribe__text', {
		scrollTrigger: {
			trigger: '.customise__form',
			start: '-150%',
		},
		opacity: 0,
		delay: 2.1,
		duration: 1.6,
	});

	if (!elements) return;

	elements.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.customise__form',
				start: '-150%',
			},
			x: -121,
			opacity: 0,
			duration: 1.4,
			delay: index * 0.3,
		});
	});
}
