import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapContact() {
	gsap.from('.contacts__inner', {
		scrollTrigger: {
			trigger: '.contacts',
			start: '-225%',
		},
		scale: 0,
		opacity: 0,
		duration: 0.8,
	});
}
