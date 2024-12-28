import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapHeader() {
	const elements = gsap.utils.toArray('.header__item');

	elements.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.header',
			},
			y: -40,
			opacity: 0,
			duration: 0.7,
			delay: index * 0.3,
		});
	});
}
