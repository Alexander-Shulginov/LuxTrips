import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapRated() {
	const tl = gsap.timeline();
	const sectionTitle = document.querySelector('.section-title--decor');

	tl.to(sectionTitle, {
		scrollTrigger: {
			trigger: '.rated',
			start: '-65%',
			onEnter: () => {
				sectionTitle.classList.add('section-title--decor-visible');
			},
			opacity: 1,
		},

	});
}
