import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapFooter() {
	const tl = gsap.timeline();

	// tl.from('.footer__logo', {
	// 	scrollTrigger: {
	// 		trigger: '.footer',
	// 		start: '-10%',
	// 		end: '50%',
	// 		// markers: true,
	// 	},
	// 	opacity: 0,
	// 	// delay: 0.5,
	// 	duration: 1,
	// });
}
