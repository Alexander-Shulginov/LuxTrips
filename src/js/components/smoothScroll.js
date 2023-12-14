import Lenis from '@studio-freight/lenis';

export default function smoothScroll() {
	const lenis = new Lenis({
		lerp: 0.1,
		duration: 1.2,
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}
