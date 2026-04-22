import { gsap } from 'gsap';

export default function gsapHeader() {
	const elements = gsap.utils.toArray('.navigation__item');

	gsap.killTweensOf(elements);

	elements.forEach((element, index) => {
		gsap.from(element, {
			y: -40,
			opacity: 0,
			duration: 0.7,
			delay: index * 0.3,
		});
	});
}
