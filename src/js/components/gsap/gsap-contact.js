import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapContact() {
	const elements = gsap.utils.toArray('[data-gsap-contact]');

	elements.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.contacts',
				start: '-150%',
			},
			y: 120,
			opacity: 0,
			duration: 0.6,
			delay: index * 0.3,
		});
	});
}
