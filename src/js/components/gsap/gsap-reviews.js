import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { typeText } from '../../main';

gsap.registerPlugin(ScrollTrigger);

export default function gsapReviews() {
	const tl = gsap.timeline();

	tl.to('.reviews', {
		scrollTrigger: {
			trigger: '.reviews',
			start: '-35%',
			onEnter: () => typeText(1),
		},

	});
}
