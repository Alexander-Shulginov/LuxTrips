import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapCustomise() {
	const items = document.querySelectorAll('.customise__animation');
	gsap.to('.customise__sky--left', {
		scrollTrigger: {
			trigger: '.customise',
			start: '-20%',
			end: '50%',
			scrub: true,
		},
		y: 300,
		opacity: 1,
		duration: 0.8,
		delay: 0.3,
	});

	gsap.to('.customise__sky--right', {
		scrollTrigger: {
			trigger: '.customise',
			start: '-20%',
			end: '50%',
			scrub: true,
		},
		y: -200,
		opacity: 1,
		duration: 0.8,
		delay: 0.3,
	});
	gsap.to('.customise', {
		scrollTrigger: {
			trigger: '.customise__animation',
			onEnter: () => {
				items.forEach((item) => {
					item.classList.add('customise__animation--start');
				});
			},
		},
	});
}
