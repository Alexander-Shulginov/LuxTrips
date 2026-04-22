export default function throttle<T extends unknown[]>(fn: (...args: T) => void, delay: number) {
	let lastCall = 0;
	return function (...args: T) {
		const now = Date.now();
		if (now - lastCall >= delay) {
			lastCall = now;
			fn(...args);
		}
	};
}
