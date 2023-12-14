import { gsap } from 'gsap';
import anime from 'animejs/lib/anime.es';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function gsapPackages() {
	const items = document.querySelectorAll('.packages__item');
	const tl = gsap.timeline();

	items.forEach((item) => {
		tl.from(
			item,
			{
				y: 80,
				opacity: 0,
				duration: 0.5,
			},
			0,
		);

		if (window.innerWidth < 1024) {
			ScrollTrigger.create({
				trigger: '.packages',
				start: '-75%',
				animation: tl,
			});
		} else {
			ScrollTrigger.create({
				trigger: '.packages',
				start: '-50%',
				animation: tl,
				onToggle(self) {
					if (self.isActive) {
						anime({
							targets: '.packages__nums-1',
							value: [[1, 34]],
							round: 1,
							easing: 'easeInOutExpo',
							duration: 3000,
						});
						anime({
							targets: '.packages__nums-2',
							value: [[1, 29]],
							round: 1,
							easing: 'easeInOutExpo',
							duration: 3000,
							delay: 300,
						});
						anime({
							targets: '.packages__nums-3',
							value: [[1, 46]],
							round: 1,
							easing: 'easeInOutExpo',
							duration: 3000,
							delay: 600,
						});
						anime({
							targets: '.packages__nums-4',
							value: [[1, 35]],
							round: 1,
							easing: 'easeInOutExpo',
							duration: 3000,
							delay: 900,
						});
						anime({
							targets: '.packages__nums-5',
							value: [[1, 168]],
							round: 1,
							easing: 'easeInOutExpo',
							duration: 3000,
							delay: 1200,
						});
					}
				},
			});
		}
	});
}
