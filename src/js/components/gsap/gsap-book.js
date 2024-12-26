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

	const elements = gsap.utils.toArray('[data-gsap-book]');

	elements.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.book__content',
				start: '-130%',
			},
			opacity: 0,
			y: 30,
			duration: 0.9,
			delay: index * 0.4,
		});
	});
}
