import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapWhy() {
	const elements = gsap.utils.toArray('.why__decor-img');

	elements.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.why',
				start: '-30%',
			},
			y: 150,
			opacity: 0,
			duration: 0.8,
			delay: index * 0.3,
		});
	});

	gsap.from('.why__picture', {
		scrollTrigger: {
			trigger: '.why',
			start: '-1%',
		},
		x: -150,
		opacity: 0,
		duration: 0.8,
		delay: 0.3,
	});
}
