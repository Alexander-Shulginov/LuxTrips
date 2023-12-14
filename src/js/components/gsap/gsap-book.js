import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gsapBook() {
	const tl = gsap.timeline();
	const sectionTitle = document.querySelector('.book .section-title--decor');

	tl.to(sectionTitle, {
		scrollTrigger: {
			trigger: '.book',
			start: '-65%',
			onEnter: () => {
				sectionTitle.classList.add('section-title--decor-visible');
			},
			opacity: 1,
		},

	});
}
