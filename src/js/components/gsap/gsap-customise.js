import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapCustomise() {
	gsap.to('.customise__sky--left', {
		scrollTrigger: {
			trigger: '.customise',
			start: '-20%',
			end: '50%',
			scrub: true,
		},
		y: 500,
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
			start: '-860%',
			toggleClass: 'customise__animation--start',
		},
	});
	gsap.to('.customise', {
		scrollTrigger: {
			trigger: '.customise__animation--1',
			// start: '-960%',
			toggleClass: 'customise__animation--start',
		},
	});
	gsap.to('.customise', {
		scrollTrigger: {
			trigger: '.customise__animation--2',
			// start: '-1060%',
			toggleClass: 'customise__animation--start',
		},
	});
	gsap.to('.customise', {
		scrollTrigger: {
			trigger: '.customise__animation--3',
			// start: '-1160%',
			toggleClass: 'customise__animation--start',
		},
	});
	gsap.to('.customise', {
		scrollTrigger: {
			trigger: '.customise__animation--4',
			// start: '-1260%',
			toggleClass: 'customise__animation--start',
		},
	});
	gsap.to('.customise', {
		scrollTrigger: {
			trigger: '.customise__animation--5',
			// start: '-1360%',
			toggleClass: 'customise__animation--start',
		},
	});
}
